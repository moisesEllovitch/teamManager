import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Teams Manager';
  constructor(private teamSrvc: TeamsService) { }

  ngOnInit() {
  }

  resetApp(){
    try{
      this.teamSrvc.getTeams().subscribe(ts => {
        localStorage.setItem('teams', JSON.stringify(ts));
        window.location.reload();
      });
    } catch {
      console.log('file: header.component.ts; Method: resetApp');
    }
  }
}
