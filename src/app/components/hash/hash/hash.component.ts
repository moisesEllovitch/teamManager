import { Component, OnInit } from '@angular/core';
import { squareModel } from 'src/app/Models/squareModel';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.scss']
})
export class HashComponent implements OnInit {

  ngOnInit() {
  }

  title = 'Yaniv Exercise Middle Project';
  squares: squareModel[] = [];
  isXTurn: boolean = true;
  isGameFinished: boolean = false;

  constructor(){
    this.squares = this.getSquares();
  }

  getSquares() : squareModel[]{
    let _squares: squareModel[] = [];
    _squares = [
      {id: 1, isEmpty: true, isX: false, line: 1, column: 1, isWin: false},
      {id: 2, isEmpty: true, isX: false, line: 1, column: 2, isWin: false},
      {id: 3, isEmpty: true, isX: false, line: 1, column: 3, isWin: false},
      {id: 4, isEmpty: true, isX: false, line: 2, column: 1, isWin: false},
      {id: 5, isEmpty: true, isX: false, line: 2, column: 2, isWin: false},
      {id: 6, isEmpty: true, isX: false, line: 2, column: 3, isWin: false},
      {id: 7, isEmpty: true, isX: false, line: 3, column: 1, isWin: false},
      {id: 8, isEmpty: true, isX: false, line: 3, column: 2, isWin: false},
      {id: 9, isEmpty: true, isX: false, line: 3, column: 3, isWin: false},
      ];

      return _squares;
  }

  Restart (){
    this.squares = this.getSquares();
    this.isGameFinished = false;
  }

  ChangeTurn(){
    this.isXTurn = !this.isXTurn; 
  }

  updateSquare(_square : squareModel){
    this.squares.forEach(element => {

      if(element.id == _square.id){
        element = _square;
      }
    });

    this.checkFinishGame(_square.line, _square.column, _square.isX);

    console.log("Final: ");
    console.log(this.squares);
  }

  checkFinishGame(line: number, column: number, isX: boolean){
    let continueTheGame: boolean = false;

    continueTheGame = this.checkLine(line, isX);

    if(continueTheGame == false){
      this.isGameFinished = true;
    } else{
      
      continueTheGame = this.checkColumn(column, isX);
      
      if(continueTheGame == false){
        this.isGameFinished = true;
      } else{
        continueTheGame = this.checkInclined_1(line, column, isX);

        if(!continueTheGame){
          this.isGameFinished = true;
        } else{
          continueTheGame = this.checkInclined_2(line, column, isX);

          if(!continueTheGame){
            this.isGameFinished = true;
          }
        }

      }
    }

    if(!continueTheGame){

      //this.squares.find(s => s.isWin == true);

      // if(this.isXTurn){
      //   alert('0 Won!');
      // } else{
      //   alert('X Won!');
      // }
    }


  }

  checkInclined_2(line: number, column: number, isX: boolean) : boolean{
    let continueTheGame: boolean = false;
    let _sInclined_2: squareModel[] = [];
    
    if(this.squares.find(s => s.line == 1 && s.column == 3 && !s.isEmpty) != undefined){
    _sInclined_2.push(this.squares.find(s => s.line == 1 && s.column == 3 && !s.isEmpty));
    }

    if(this.squares.find(s => s.line == 2 && s.column == 2 && !s.isEmpty) != undefined){
      _sInclined_2.push(this.squares.find(s => s.line == 2 && s.column == 2 && !s.isEmpty));
    }

    if(this.squares.find(s => s.line == 3 && s.column == 1 && !s.isEmpty) != undefined){
      _sInclined_2.push(this.squares.find(s => s.line == 3 && s.column == 1 && !s.isEmpty));
    }
  
      if(_sInclined_2.length == 3){
        
      _sInclined_2.forEach(element => {
        if(element.isX != isX){
          continueTheGame = true;
        }
      });
    } else{     
      continueTheGame = true;
    } 

    if(!continueTheGame){
      this.setWinSquares(_sInclined_2);
    }

    return continueTheGame;
  } 

  checkInclined_1(line: number, column: number, isX: boolean) : boolean{
    let continueTheGame: boolean = false;
    let _sInclined_1: squareModel[] = [];
    
    if(this.squares.find(s => s.line == 1 && s.column == 1 && !s.isEmpty) != undefined){
      _sInclined_1.push(this.squares.find(s => s.line == 1 && s.column == 1 && !s.isEmpty));
    }

    if(this.squares.find(s => s.line == 2 && s.column == 2 && !s.isEmpty) != undefined){
      _sInclined_1.push(this.squares.find(s => s.line == 2 && s.column == 2 && !s.isEmpty));
    }

    if(this.squares.find(s => s.line == 3 && s.column == 3 && !s.isEmpty) != undefined){
    _sInclined_1.push(this.squares.find(s => s.line == 3 && s.column == 3 && !s.isEmpty));
    }

    if(_sInclined_1.length == 3){
      _sInclined_1.forEach(element => {
        if(element.isX != isX){
          continueTheGame = true;
        }
      });
    } else{
      continueTheGame = true;
    }

    if(!continueTheGame){
      this.setWinSquares(_sInclined_1);
    }

    return continueTheGame;
  } 

  checkColumn(column: number, isX: boolean) : boolean{
    let _sColumn: squareModel[];
    _sColumn = this.squares.filter(s => s.column == column && !s.isEmpty);
    let continueTheGame: boolean = false;

    if(_sColumn.length == 3){

    _sColumn.forEach(element => {

        if(element.isX != isX){
          continueTheGame = true;
        }
      });        
    } else{
      continueTheGame = true;
    }

    if(!continueTheGame){
      this.setWinSquares(_sColumn);
    }

    return continueTheGame;

  }

  checkLine(line: number, isX: boolean) : boolean{
    let _sLine: squareModel[];
    _sLine = this.squares.filter(s => s.line == line && !s.isEmpty);
    let continueTheGame: boolean = false;

    if(_sLine.length == 3){

      _sLine.forEach(element => {

        if(element.isX != isX){
          continueTheGame = true;
        }
      });        
    } else{
      continueTheGame = true;
    }

    if(!continueTheGame){
      this.setWinSquares(_sLine);
    }

    return continueTheGame;
  }

  setWinSquares(squares_win: squareModel[]){
    squares_win.forEach(element => {
      this.squares.find(s => s.id == element.id).isWin = true;
    });

  }


}
