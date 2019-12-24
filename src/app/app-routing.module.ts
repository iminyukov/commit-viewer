import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryPageComponent} from './pages/history-page/history-page.component';

const routes: Routes = [
  { path: 'history', component: HistoryPageComponent },
  { path: '**', redirectTo: '/history' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
