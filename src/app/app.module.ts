import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { appRouting } from './routing.module';
import { HttpModule } from '@angular/http';
import { UpdateUmpiringScheduleComponent } from './update-umpiring-schedule/update-umpiring-schedule.component'
import { DatePipe } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ViewscheduleComponent,
    AddscheduleComponent,
    UpdateUmpiringScheduleComponent
  ],
  imports: [
    BrowserModule,appRouting,HttpModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
