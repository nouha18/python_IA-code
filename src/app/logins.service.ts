import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoginsService {
    url = "http://localhost:8080";
  constructor(private http : HttpClient) { }
    loginto(data) {
        //on ajoute observe to see headers
        return this.http.post(this.url + '/users/login', data)
    }
}
