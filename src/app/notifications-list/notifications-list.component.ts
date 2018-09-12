import { Component, Input, OnInit } from '@angular/core';

import { Notification } from '../../notification';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {
  @Input() notifications: Notification[];

  constructor() { }

  ngOnInit() {
  }

  getNotificationString(notification: Notification) {
    const { id, organization, repository, title } = notification;
    return `${id}. ${organization}/${repository}: ${title}`;
  }
}
