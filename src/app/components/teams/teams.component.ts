import { Component, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/Models/TeamModels';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MessagesService } from 'src/app/services/messages.service';
import { TeamsService } from 'src/app/services/teams.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { UpdateTeamDialogComponent } from 'src/app/dialogs/update-team-dialog/update-team-dialog.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  // teams : Team[] = [
  //   {id: 1, name: "Juventus", country: "Italia", money: 1500000, titles: 5},
  //   {id: 2, name: "Flamengo", country: "Brazil", money: 1300300, titles: 4},
  //   {id: 3, name: "Vasco", country: "Brazil", money: 1260000, titles: 2},
  //   {id: 4, name: "Botafogo", country: "Brazil", money: 690000, titles: 0},
  //   {id: 5, name: "Real Madrid", country: "Spain", money: 3220000, titles: 13},
  //   {id: 6, name: "Barcelona", country: "Spain", money: 3900400, titles: 18},
  //   {id: 7, name: "Manchester United", country: "England", money: 5504300, titles: 9},
  //   {id: 8, name: "Porto", country: "Portugal", money: 1200000, titles: 1},
  //   {id: 9, name: "Bayer", country: "Germany", money: 1700800, titles: 3}
  // ];

  displayedColumns: string[] = ['name', 'country', 'money', 'titles', 'division', 'delete'];
  // dataSource = new MatTableDataSource(this.teams);
  dataSource = new MatTableDataSource();
  teams : Team[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // isDetailsOpen : boolean = false;
  teamOpenDetails : Team;

  constructor(
    private _messagesService : MessagesService,
    private teamSrvc: TeamsService,
    private matDialog : MatDialog
    ) { }

  ngOnInit() {
    try{
      if(localStorage.getItem('teams') != null){
        let t : Team[] = JSON.parse(localStorage.getItem('teams'));
        this.teams = t;
        this.refreshDataSource();
      } else{
        this.teamSrvc.getTeams().subscribe(t => {
          localStorage.setItem('teams', JSON.stringify(t));

            this.teams = t;
            this.dataSource = new MatTableDataSource(this.teams);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });
      }

    } catch {
      console.log('file: teams.component.ts; Method: ngOnInit');
    }
  }

  refreshDataSource(){
    try{
      this.dataSource = new MatTableDataSource(this.teams);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } catch {
      console.log('file: teams.component.ts; Method: refreshDataSource');
    }
  }

  applyFilter(filterValue: string) {
    try{
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    } catch {
      console.log('file: teams.component.ts; Method: applyFilter');
    }
  }

  delete(_id : number){
    try{
      let _name : string = this.teams.find(t => t.id == _id).name;
      this.teams = this.teamSrvc.deleteTeam(_id, this.teams);
      this.refreshDataSource();
      this._messagesService.confirmMessage(_name + " was Deleted");

    } catch {
      console.log('file: teams.component.ts; Method: delete');
    }
  }

  openDialogAddOrUpdate(team : Team){
    try{
      
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.height = "500px";
      dialogConfig.width = "540px";
      dialogConfig.panelClass = 'team-detail-dialog';
      
      if(team != null){
        dialogConfig.data = team;
      }

      const dialogRef = this.matDialog.open(UpdateTeamDialogComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(result => {
        if(localStorage.getItem('teams') != null){
          let t : Team[] = JSON.parse(localStorage.getItem('teams'));
          this.teams = t;
          this.refreshDataSource();
        } 
      });

    } catch (error) {
      console.log('file: teams.component.ts; Method: openDialogUpdate' + error);
    }
  }
  
}