import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { CommitItemComponent } from './pages/history-page/commit-item/commit-item.component';
import {HttpClientModule} from '@angular/common/http';
import { StringToDatePipe } from './pipes/string-to-date.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryPageComponent,
    CommitItemComponent,
    StringToDatePipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
