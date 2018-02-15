import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './/app-routing.module';
import {ScheduleService} from './schedule/schedule.service';
import {LoginService} from './login/login.service';
import {PendingService} from './pending/pending.service';
import {ArrivedService} from './arrived/arrived.service';
import {HistoryService} from './history/history.service';

import {FormsModule, NgForm} from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PendingComponent} from './pending/pending.component';
import {HistoryComponent} from './history/history.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {ArrivedComponent} from './arrived/arrived.component';
import {Employee} from './model/employee';
import {VisitorInfo} from './model/visitor-info';
import {VisitorSchedule} from './model/visitor-schedule';
import {VisitorScheduleId} from './model/visitor-schedule-id';
import {VisitorHistory} from './model/visitor-history';
import {VisitorHistoryId} from './model/visitor-history-id';

import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleFilterPipe } from './schedule/schedule-filter.pipe';
import { PendingFilterPipe } from './pending/pending-filter.pipe';
import { ArrivedFilterPipe } from './arrived/arrived-filter.pipe';
import { HistoryFilterPipe } from './history/history-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PendingComponent,
    HistoryComponent,
    ScheduleComponent,
    ArrivedComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    ScheduleFilterPipe,
    PendingFilterPipe,
    ArrivedFilterPipe,
    HistoryFilterPipe,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,

    HttpClientModule


  ],
  providers: [
    ScheduleService,
    LoginService,
    PendingService,
    ArrivedService,
    HistoryService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
