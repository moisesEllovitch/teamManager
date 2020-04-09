import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
// import { AddTeamsComponent } from './components/add-teams/add-teams.component';
import { HashComponent } from './components/hash/hash/hash.component';
// import { TeamComponent } from './components/team/team.component';
import { DivisionsComponent } from './components/divisions/divisions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  // { path: 'team/:id', component: TeamComponent },
  // { path: 'addTeam', component: AddTeamsComponent },
  { path: 'hash', component: HashComponent },
  { path: 'divisions', component: DivisionsComponent },

  { path: '', component: HomeComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



