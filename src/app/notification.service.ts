import { Injectable } from '@angular/core';
import { of } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications = [
      {
          "org": "NativeScript",
          "repo": "NativeScript",
          "title": "Title 0"
      },
      {
          "org": "NativeScript",
          "repo": "NativeScript",
          "title": "Title 1"
      }
  ];

  constructor() { }

  getNotifications() {
    return of(this.notifications);
  }
}
