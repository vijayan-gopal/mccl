import { Component, OnInit } from '@angular/core';
import { FetchscheduleService } from '../fetchschedule.service';
import { UmpiringSchedule } from '../classes/umpiringschedule';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.css']
})
export class ViewscheduleComponent implements OnInit {
  schedule: Array<UmpiringSchedule> = []
  constructor(private fecthschedule: FetchscheduleService) { }

  ngOnInit() {
    this.fecthschedule.fetchSchedule()
    .then(data=>{
      this.schedule = data
      console.log(this.schedule)
    })
    
  }

}
