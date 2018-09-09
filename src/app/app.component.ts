import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'github-feed-ng';
  notifications = [];

  constructor(private notificationService: NotificationService) {
    this.notificationService.getNotifications().subscribe((notifications) => {
      this.notifications = notifications;
    });
  }

  getNotificationString(notification) {
    const { org, repo, title } = notification;
    return `${org}/${repo}: ${title}`;
  }
}
