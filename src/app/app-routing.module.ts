import {NgModule} from '@angular/core';

import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {PendingComponent} from './pending/pending.component';
import {HistoryComponent} from './history/history.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {ArrivedComponent} from './arrived/arrived.component';
import {BodyComponent} from './body/body.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dil', component: BodyComponent, children: [
      {path: '', redirectTo: 'schedule', pathMatch: 'full'},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'arrived', component: ArrivedComponent},
      {path: 'pending', component: PendingComponent},
      {path: 'history', component: HistoryComponent},
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
