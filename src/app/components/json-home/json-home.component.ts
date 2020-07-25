import { Component, OnInit } from '@angular/core';
import { DisplayJsonDialogComponent } from 'src/app/dialogs/display-json-dialog/display-json-dialog.component';
import { MatDialog } from '@angular/material';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/Models/TeamModels';
import { displayJsonType } from 'src/app/Models/utils';

@Component({
  selector: 'app-json-home',
  templateUrl: './json-home.component.html',
  styleUrls: ['./json-home.component.scss']
})
export class JsonHomeComponent implements OnInit {

  teams : Team[];

  constructor(
    public teamSrvc : TeamsService,
    public dialog : MatDialog 
    ) { }

  ngOnInit() {
    this.teamSrvc.getTeams().subscribe(t => {
        this.teams = t;
      });
  }

  openJson(type : number){
    try{

      let _data : any;

      switch (type) {
        case 1:
          _data = {
            displayJsonType: displayJsonType.SimpleJson,
            teams: this.teams,
          } 
          break;
        case 2:
          _data = {
            displayJsonType: displayJsonType.BeautyJson,
            teams: this.teams,
          } 
          break;
        case 3:
          _data = {
            displayJsonType: displayJsonType.ObjectFormatJson,
            teams: this.teams,
          } 
          break;
      
        default:
          break;
      }


      let dialogRef = this.dialog.open(DisplayJsonDialogComponent, {
        height: '650px',
        width: '600px',
        data: _data
        
      });
      

    } catch (e) {
      console.log('file: json-home.component.ts; Method: openJson ' + e);
    }
  }

}
