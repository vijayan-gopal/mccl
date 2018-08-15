import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';
import { UmpiringSchedule } from './classes/umpiringschedule';

@Injectable({
  providedIn: 'root'
})
export class FetchscheduleService {

  constructor(private http: Http) {   }
  
  fetchSchedule(): Promise<any>{
    var url = 'http://localhost:3000/umpiringschedule'
    return this.http.get(url).toPromise()
    .then(res=>res.json())
  };

  updateSchedule(msg:Array<any>): Promise<any>{
    var url = 'http://localhost:3000/updateschedule'
    return this.http.put(url,msg).toPromise()
    .then(res=>res.json())
  };

  addSchedule(msg:UmpiringSchedule): Promise<any>{
    var url = 'http://localhost:3000/addschedule'
    return this.http.post(url,msg).toPromise()
    .then(res=>res.json())
  };
}
