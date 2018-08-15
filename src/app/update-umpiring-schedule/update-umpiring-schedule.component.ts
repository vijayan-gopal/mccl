import { Component, OnInit } from '@angular/core';
import { FetchscheduleService } from '../fetchschedule.service';
import { UmpiringSchedule } from '../classes/umpiringschedule';
import { DatePipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-update',
//  templateUrl: './update-umpiring-schedule.component.html',
template: `
<h3>Update CSK Umpiring Schedule</h3>
<table class="table">
<thead class="thead-dark">
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">UmpiringDate</th>
  </tr>
</thead>
<tbody>
<div *ngIf="message!=''" class="alert alert-warning" role="alert">
{{message}}
</div>
  <tr *ngFor="let sched of schedule">
    <th scope="row">{{sched._id}}</th>
    <td>{{sched.name}}</td>
    <td>
      <input #date (change)='0' type="date" name="uDate">
      <button (click)=setDate(sched.name,date.value) type="button" class="btn btn-secondary">Update</button>
  </tr>
</tbody>
</table>`,
styleUrls: ['./update-umpiring-schedule.component.css']
})
export class UpdateUmpiringScheduleComponent implements OnInit {

  schedule: Array<UmpiringSchedule> = []
  message: string
  constructor(private fecthschedule: FetchscheduleService,private datepipe:DatePipe) { }

  ngOnInit() {
    this.fecthschedule.fetchSchedule()
    .then(data=>{
      this.schedule = data
      console.log(this.schedule)
    })
  };

  setDate(name: string,dt: string){
    
    var fmtdt = this.datepipe.transform(dt,'MM-dd-yyyy')
    console.log(name,fmtdt)

    var msg = [{"name":name},{"Date":fmtdt}]
    this.fecthschedule.updateSchedule(msg)
    .then(data=>{this.message = data.message})
  }    


}
