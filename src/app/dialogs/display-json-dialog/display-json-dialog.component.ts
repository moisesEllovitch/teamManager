import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Team } from 'src/app/Models/TeamModels';

import JSONFormatter from 'json-formatter-js';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  templateUrl: './display-json-dialog.component.html',
  styleUrls: ['./display-json-dialog.component.scss']
})
export class DisplayJsonDialogComponent implements OnInit {

  dialogTitle : string;
  teams : Team[];

  showSimpleJson : boolean = false;
  showBeautyJson : boolean = false;
  showJsonAsObject : boolean = false;
  
  constructor(
    private dialogRef: MatDialogRef<DisplayJsonDialogComponent>,
    private element: ElementRef,
    public teamSrvc : TeamsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.teams = this.data.teams;
    
    switch (this.data.displayJsonType) {
      case 1:
        this.dialogTitle = 'Json Pipe';
        this.showSimpleJson = true;

        break;
      case 2:
        this.dialogTitle = 'Beauty Json';
        this.showBeautyJson = true;
        this.formatBeautyJson();

        break;
      case 3:
        this.dialogTitle = 'Json in Object Format';
        this.showJsonAsObject = true;
        this.formatObjectJson();

        break;
          
      default:
        break;
      } 

  }

  formatBeautyJson(){
    try{
      this.teamSrvc.getTeams().subscribe(t => {
        this.teams = t;
        var teams_formatted = JSON.stringify(t, undefined, 4);
        this.output(this.syntaxHighlight(teams_formatted));
      });     
    } 
    catch (e) 
    {
      console.log('file: display-json-dialog.component.ts; Method: formatBeautyJson ' + e);
    }
  }

  formatObjectJson(){
    try{
      const formatterType3 = new JSONFormatter(this.teams, Infinity);
      this.element.nativeElement.appendChild(formatterType3.render());
    } 
    catch (e) 
    {
      console.log('file: display-json-dialog.component.ts; Method: formatObjectJson ' + e);
    }
  }

  syntaxHighlight(json) {
    try{
     
      json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          var cls = 'number';
          var _color = '#7abfb9';

          if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                  cls = 'key';
                  _color = '#827f7f';
              } else {
                  cls = 'string';
                  _color = '#3f793f';
              }
          } else if (/true|false/.test(match)) {
              cls = 'boolean';
              _color = '#a7a936';
          } else if (/null/.test(match)) {
              cls = 'null';
              _color = '#af6774';
          }
          // return '<span class="' + cls + '">' + match + '</span>';

          // caso funcione o css, usar a linha acima.
          return '<span ' + 'style="color: ' + _color + ';"' + 'class="' + cls + '">' + match + '</span>';
      });
    }
    catch (e) 
    {
      console.log('file: display-json-dialog.component.ts; Method: syntaxHighlight ' + e);
    }
  
  }

  //http://jsfiddle.net/KJQ9K/554/
  output(inp) {
    try{
      var _elem = document.createElement("PRE");
      _elem.innerHTML = inp;
      document.getElementById('beauty-json-id').appendChild(_elem);  
    }
    catch (e) 
    {
      console.log('file: display-json-dialog.component.ts; Method: output ' + e);
    }
  }

}
