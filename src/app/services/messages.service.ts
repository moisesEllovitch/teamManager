import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagesSnackBarComponent } from '../components/base/messages-snack-bar/messages-snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private _snackBar : MatSnackBar) { }

  confirmMessage(_message : string){
    this._snackBar.openFromComponent(MessagesSnackBarComponent, {
      data: _message,
      duration: 3000,
      panelClass: 'confirm-message',
    });
  }

  errorMessage(_message : string){
    this._snackBar.openFromComponent(MessagesSnackBarComponent, {
      data: _message,
      duration: 3000,
      panelClass: 'error-message',
    });
  }

}
