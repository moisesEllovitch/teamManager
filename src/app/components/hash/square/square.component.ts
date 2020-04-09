import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { squareModel } from 'src/app/Models/squareModel';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input()
  square: squareModel;
  @Output()
  changeTurn = new EventEmitter();
  @Input()
  isXTurn: boolean;
  @Output()
  updateSquare = new EventEmitter();
  @Input()
  isFinished: boolean;

  notEmptyX : boolean = false;
  notEmptyO : boolean = false;

  constructor() { }

  ngOnInit() {
    //console.log(this.square);
  }

  selectSquare(){

    if(!this.isFinished){

      if(this.square.isEmpty){
          this.square.isEmpty = false;

          if(this.isXTurn){
            this.square.isX = true;
            this.notEmptyX = true;
        } else{
          this.square.isX = false;
          this.notEmptyO = true;
        }
        
      }
    
      this.changeTurn.emit('');
      this.updateSquare.emit(this.square);
    } else{
      alert('END');
    }
  }
}
