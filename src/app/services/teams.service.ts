import { Injectable } from '@angular/core';
import { Team } from '../Models/TeamModels';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  teams : Team[] = [];

  getTeams() {
    try{
          
      return this.http.get<Team[]>('../../../assets/teams-mockup.json');
    } catch {
      console.log('file: teams.service.ts; Method: getTeams');
    }
  }

  // getTeamById(id: number) : Team {
  //   return this.teams.find(t => t.id == id);
  // }

  deleteTeam(id : number, teams : Team[]) : Team[]{
    try{
      this.teams = teams.filter(t => t.id != id);
      localStorage.setItem('teams', JSON.stringify(this.teams));
      return this.teams;
    } catch {
      console.log('file: teams.service.ts; Method: deleteTeam');
    }
  }

  addTeam(_name : string, _country : string, _money : number, _titles : number, _division : number) : Team[]{
    try{

      let newId : number = this.getNewId();

      let t : Team = new Team(newId, _name, _country, _money, _titles, _division);

      if(localStorage.getItem('teams') != null){
        this.teams = JSON.parse(localStorage.getItem('teams'));
      }

      this.teams.push(t);
      
      localStorage.setItem('teams', JSON.stringify(this.teams));

      return this.teams;

    } catch {
      console.log('file: teams.service.ts; Method: addTeam');
    }
  }


  updateTeam(_id: number ,_name : string, _country : string, _money : number, _titles : number, _division : number) : boolean{
    try{

      if(localStorage.getItem('teams') != null){
        this.teams = JSON.parse(localStorage.getItem('teams'));
      }

      this.teams.find(t => t.id == _id).name = _name;
      this.teams.find(t => t.id == _id).country = _country;
      this.teams.find(t => t.id == _id).money = _money;
      this.teams.find(t => t.id == _id).titles = _titles;
      this.teams.find(t => t.id == _id).division = _division;

      localStorage.setItem('teams', JSON.stringify(this.teams));

      return true;

    } catch (error) {
      console.log('file: teams.service.ts; Method: updateTeam ' + error);
      return false;
    }
  }

  // getNewId() : number{
  //   try{

  //     if(localStorage.getItem('teams_new') != null){
  //       let t : Teams = JSON.parse(localStorage.getItem('teams_new'));
  //       this.teams_new = t;
  //       return this.teams[this.teams.length-1].id + 1;
  //     } else{

  //       this.getTeams().subscribe(ts => {
  //         localStorage.setItem('teams_new', JSON.stringify(ts));
  //         this.teams = ts;
  //         return this.teams[this.teams.length-1].id + 1;
          
  //       });
  //     }

  //   } catch {
  //     console.log('file: teams.service.ts; Method: getNewId');
  //   }
  // }

  getNewId() : number{
    try{

      if(localStorage.getItem('teams') != null){
        let t : Team[] = JSON.parse(localStorage.getItem('teams'));
        this.teams = t;
        return this.teams[this.teams.length-1].id + 1;
      } else{

        this.getTeams().subscribe(ts => {
          localStorage.setItem('teams', JSON.stringify(ts));
          this.teams = ts;
          return this.teams[this.teams.length-1].id + 1;
          
        });
      }

    } catch {
      console.log('file: teams.service.ts; Method: getNewId');
    }
  }
}
