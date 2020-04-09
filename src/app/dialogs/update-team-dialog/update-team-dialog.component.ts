import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'
import { Team, Country } from 'src/app/Models/TeamModels';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeamsService } from 'src/app/services/teams.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-update-team-dialog',
  templateUrl: './update-team-dialog.component.html',
  styleUrls: ['./update-team-dialog.component.scss']
})
export class UpdateTeamDialogComponent implements OnInit {

  name : string;
  country : string;
  money : number;
  titles: number;
  division: number;
  
  dialogTitle : string = '';

  countries: Country[] = [
    {value: 1, viewValue: 'Brazil', flagUrl: '../../../assets/images/flag-brazil.png'},
    {value: 2, viewValue: 'Spain', flagUrl: '../../../assets/images/flag-spain.png'},
    {value: 3, viewValue: 'Italy', flagUrl: '../../../assets/images/flag-italy.png'},
    {value: 4, viewValue: 'Portugal', flagUrl: '../../../assets/images/flag-portugal.png'},
    {value: 5, viewValue: 'England', flagUrl: '../../../assets/images/flag-england.png'},
    {value: 6, viewValue: 'Israel', flagUrl: '../../../assets/images/flag-israel.png'},
    {value: 7, viewValue: 'France', flagUrl: '../../../assets/images/flag-france.png'},       
    {value: 8, viewValue: 'Germany', flagUrl: '../../../assets/images/flag-germany.png'}        
  ];
  
  addTeamForm;

  constructor(private _messagesService : MessagesService,
    private teamSrvc: TeamsService,
    private dialogRef: MatDialogRef<UpdateTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Team) {
    
   }


  ngOnInit() {
    try{
      this.dialogTitle = 'Add Team';

      let nameDefaultValue : string = '';
      let countryDefaultValue : number = 0;
      let titlesDefaultValue : string = '';
      let moneyDefaultValue : string = '';
      let divisionDefaultValue : string = '';

      if(this.data != null){
        this.dialogTitle = 'Update Team';

        nameDefaultValue = this.data.name;
        countryDefaultValue = this.countries.find(c => c.viewValue == this.data.country).value;
        titlesDefaultValue = this.data.titles.toString();
        moneyDefaultValue = this.data.money.toString();
        divisionDefaultValue = this.data.division.toString();
      }

      this.addTeamForm = new FormGroup({
        'name': new FormControl(nameDefaultValue, [
          Validators.required,
          Validators.minLength(3)
        ]),
        'country': new FormControl(countryDefaultValue, [
          Validators.required
        ]),
        'titles': new FormControl(titlesDefaultValue, [
          Validators.required
        ]),
        'money': new FormControl(moneyDefaultValue, [
          Validators.required
        ]),
        'division': new FormControl(divisionDefaultValue, [
          Validators.required
        ]),
      });
    } catch {
      console.log('file: update-teams.component.ts; Method: ngOnInit');
    }
  }

  onCountrySelection(data : any){
    try{

      this.country = this.countries.find(d => d.value == data).viewValue;
    } catch (error) {
      console.log('file: update-teams.component.ts; Method: onCountrySelection ' + error);
    }
  }

  setTeamProperties(_name : string, _country : number, _money : number, _titles : number, _division : number)
  {
    try{
        
      this.name = _name;
      if(_country != undefined && _country != null && _country > 0)
      {
        this.country = this.countries.find(d => d.value == _country).viewValue;
      }
      this.money = _money;
      this.titles = _titles;
      this.division = _division;
    } catch {
      console.log('file: update-teams.component.ts; Method: setTeamProperties');
    }
  }

  onSubmit(formValue){
    try{
      
      let _countryName : string = this.countries.find(c => c.value == formValue.country).viewValue;

      if(this.data != null){

        if(this.teamSrvc.updateTeam(this.data.id, formValue.name, _countryName, formValue.money, formValue.titles, formValue.division)){
          this._messagesService.confirmMessage("Team updated successfully!");
          this.dialogRef.close();
        } else{
          this._messagesService.errorMessage("Error on updating!");
        }
      } else{
        if(this.teamSrvc.addTeam(formValue.name, _countryName, formValue.money, formValue.titles, formValue.division)){
          this._messagesService.confirmMessage("Team added successfully!");
          this.dialogRef.close();
        } else{
          this._messagesService.errorMessage("Error on adding!");
        }
      }
        
    } catch (error) {
      console.log('file: update-teams.component.ts; Method: onSubmit ' + error);
    }
  }

  resetPropreties(){
    try{
      this.name = "";
      this.country = "";
      this.money = 0;
      this.titles = 0;
      this.division = 0;
    } catch {
      console.log('file: update-teams.component.ts; Method: resetPropreties');
    }
  }
}
