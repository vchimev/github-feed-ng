import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

import { Notification } from '../notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'github-feed-ng';
  notifications: Notification[];

  constructor(private notificationService: NotificationService) {
    this.notificationService.getNotifications().subscribe(notifications => this.notifications = notifications);
  }

  getNotificationString(notification: Notification) {
    const { id, organization, repository, title } = notification;
    return `${id}. ${organization}/${repository}: ${title}`;
  }
}
