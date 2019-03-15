import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AdminComponent } from './admin/admin.component';
import { EventsSidebarComponent } from './events-sidebar/events-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    AuthenticateComponent,
    AdminComponent,
    EventsSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
