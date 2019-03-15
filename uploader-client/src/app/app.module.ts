import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotersComponent } from './voters/voters.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { EventsSidebarComponent } from './events-sidebar/events-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    VotersComponent,
    CandidatesComponent,
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
