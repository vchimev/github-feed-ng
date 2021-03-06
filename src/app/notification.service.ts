import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';

import { Notification } from '../notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications: Notification[] = [
    {
      id: 0,
      organization: 'NativeScript',
      repository: 'NativeScript',
      title: 'Title 0',
      comments: [
        {
          author: 'vchimev',
          content: 'LGTM',
        },
        {
          author: 'vasil.chimev',
          content: 'LGTM'
        }
      ]
    },
    {
      id: 1,
      organization: 'NativeScript',
      repository: 'NativeScript',
      title: 'Title 1',
      comments: [
        {
          author: 'vchimev',
          content: 'LGTM',
        },
        {
          author: 'vasil.chimev',
          content: 'LGTM'
        }
      ]
    }
  ];

  constructor() { }

  getNotifcation(id: number): Observable<Notification> {
    const notification = this.notifications.find(notice => notice.id === id);

    return of(notification);
  }

  getNotifications(): Observable<Notification[]> {
    return of(this.notifications);
  }
}
