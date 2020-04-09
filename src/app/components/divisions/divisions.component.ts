import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Team } from 'src/app/Models/TeamModels';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.scss']
})
export class DivisionsComponent implements OnInit {

  teams : Team[] = [];
  all_teams : Team[] = [];
  division_A_teams : Team[] = [];
  division_B_teams : Team[] = [];
  division_C_teams : Team[] = [];
  division_D_teams : Team[] = [];

  constructor(private teamSrvc: TeamsService) { }

  ngOnInit() {
    try{
      if(localStorage.getItem('teams') != null){
        let t : Team[] = JSON.parse(localStorage.getItem('teams'));
        this.teams = t;
        this.setLists(this.teams);
      } else{

        this.teamSrvc.getTeams().subscribe(ts => {
          localStorage.setItem('teams', JSON.stringify(ts));
          this.teams = ts;
          
          this.setLists(this.teams);
          
          
        });
      }
    } catch {
      console.log('file: division.component.ts; Method: ngOnInit');
    }
  }


  setLists(_teams : Team[]){
    try{

      this.all_teams = _teams.filter(t => t.division < 1);
      this.division_A_teams = _teams.filter(t => t.division == 1);
      this.division_B_teams = _teams.filter(t => t.division == 2);
      this.division_C_teams = _teams.filter(t => t.division == 3);
      this.division_D_teams = _teams.filter(t => t.division == 4);
    } catch {
      console.log('file: division.component.ts; Method: setLists');
    }
  }
  

  drop(event: CdkDragDrop<string[]>) {
    try{
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);

        let _divisionNumber : number = this.getNewDivisionNumber(event);

        let _draggedTeam : any = event.container.data[event.currentIndex];
        this.teams.find(t => t.id == _draggedTeam.id).division = _divisionNumber;
        
        localStorage.setItem('teams', JSON.stringify(this.teams));
      }
    } catch {
      console.log('file: division.component.ts; Method: drop');
    }
  }

  getNewDivisionNumber(event: CdkDragDrop<string[]>) : number{
    try{
      console.log('event.container');
      console.log(event.container);
      let _divisionNumber : number = 0;

      if(event.container.element.nativeElement.classList.contains('teams-list')){
        _divisionNumber = 0; 
      } else if(event.container.element.nativeElement.classList.contains('division_A-list')){
        _divisionNumber = 1; 
      } else if(event.container.element.nativeElement.classList.contains('division_B-list')){
        _divisionNumber = 2; 
      } else if(event.container.element.nativeElement.classList.contains('division_C-list')){
        _divisionNumber = 3; 
      } else if(event.container.element.nativeElement.classList.contains('division_D-list')){
        _divisionNumber = 4; 
      } else{
        _divisionNumber = -1; 
      }

      

      // switch(event.container.id) { 
      //   case 'cdk-drop-list-0': { 
      //     _divisionNumber = 0; 
      //     break; 
      //   } 
      //   case 'cdk-drop-list-1': { 
      //     _divisionNumber = 1; 
      //     break; 
      //   } 
      //   case 'cdk-drop-list-2': { 
      //     _divisionNumber = 2;  
      //     break; 
      //   } 
      //   case 'cdk-drop-list-3': { 
      //     _divisionNumber = 3; 
      //     break; 
      //   }  
      //   case 'cdk-drop-list-4': { 
      //     _divisionNumber = 4; 
      //     break; 
      //   } 
      //   default: { 
      //     _divisionNumber = -1; 
      //     console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
      //     console.log('event.container.id');
      //     console.log(event.container.id);
      //     break; 
      //   } 
      // }

      return _divisionNumber;

    } catch {
      console.log('file: division.component.ts; Method: getNewDivisionNumber');
    }
  }
}
