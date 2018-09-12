import { Component, Input, OnInit } from '@angular/core';

import { Notification } from '../../notification';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {
  @Input() notification: Notification;

  constructor() { }

  ngOnInit() {
  }

}
