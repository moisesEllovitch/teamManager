import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-messages-snack-bar',
  templateUrl: './messages-snack-bar.component.html',
  styleUrls: ['./messages-snack-bar.component.scss']
})
export class MessagesSnackBarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }

}
