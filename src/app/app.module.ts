import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { CommitItemComponent } from './pages/history-page/commit-item/commit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryPageComponent,
    CommitItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
