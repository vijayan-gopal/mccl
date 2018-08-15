import { Component, OnInit } from '@angular/core';
import { FetchscheduleService } from '../fetchschedule.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
  message: string = ''
  constructor(private addschedule: FetchscheduleService) { }

  ngOnInit() {
  }

  addUmpiringSchedule(Inname: string,Indate: string){
    var msg = {_id:null,name:Inname,Date:Indate}
    this.addschedule.addSchedule(msg)
    .then(data=>{
      this.message=data.message
    })
  }

}
