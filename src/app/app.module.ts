import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from  '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatMenuModule} from '@angular/material/menu';
import { TeamsComponent } from './components/teams/teams.component';
// import { AddTeamsComponent } from './components/add-teams/add-teams.component';

import { MatTableModule } from '@angular/material'  
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import {MatSelectModule} from '@angular/material/select';
import { MessagesSnackBarComponent } from './components/base/messages-snack-bar/messages-snack-bar.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { TeamComponent } from './components/team/team.component';
import { HashComponent } from './components/hash/hash/hash.component';
import { SquareComponent } from './components/hash/square/square.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// import { TeamsService } from './services/teams.service';
import { HttpClientModule } from '@angular/common/http';
import { DivisionsComponent } from './components/divisions/divisions.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { UpdateTeamDialogComponent } from './dialogs/update-team-dialog/update-team-dialog.component';

import { MatDialogModule, MatTabsModule } from '@angular/material'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    // AddTeamsComponent,
    MessagesSnackBarComponent,
    // TeamComponent,
    HashComponent,
    SquareComponent,
    HeaderComponent,
    FooterComponent,
    DivisionsComponent,
    UpdateTeamDialogComponent,
    //TeamsService,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRippleModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    FormsModule ,
    MatSortModule,
    HttpClientModule,
    DragDropModule,
    MatDialogModule,
    MatTabsModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRippleModule,
    MatButtonModule,
    BrowserModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    FormsModule ,
    MatMenuModule,
    
  ],

  providers: [
    //TeamsService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [MessagesSnackBarComponent, UpdateTeamDialogComponent],
})
export class AppModule { }
