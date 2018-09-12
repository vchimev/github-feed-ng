import { Component, OnInit, Input } from '@angular/core';

import { Notification } from '../../notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notification: Notification;
  notificationInfo: string;

  constructor() { }

  ngOnInit() {
    const { id, organization, repository, title } = this.notification;
    this.notificationInfo = `${id}. ${organization}/${repository}: ${title}`; 
  }
}
