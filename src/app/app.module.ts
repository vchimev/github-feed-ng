import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    NotificationsListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
