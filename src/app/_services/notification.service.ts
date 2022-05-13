import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  notification = environment.url + '/notification'
  // webPush = environment.url + '/webPushPublicKey'
  constructor(private http:HttpClient) { }

  getNotification(data:any){
    console.log(data);
    return this.http.post(this.notification, data)
  }

  // getPublicKey(){
  //   return this.http.get(this.webPush)
  // }
}