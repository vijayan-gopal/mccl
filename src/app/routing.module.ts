import { RouterModule, Routes } from '@angular/router';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { UpdateUmpiringScheduleComponent } from './update-umpiring-schedule/update-umpiring-schedule.component';

const routes: Routes = [
    { path: '', component: ViewscheduleComponent },
    { path: 'add', component: AddscheduleComponent },
    { path: 'update', component: UpdateUmpiringScheduleComponent },
    { path: '**', pathMatch:'full', redirectTo: '/' }
];

export const appRouting = RouterModule.forRoot(routes);