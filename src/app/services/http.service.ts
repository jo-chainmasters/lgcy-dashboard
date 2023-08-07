import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public get(path: string, options?: any) {
    return this.http.get(this.apiUrl + path, options);
  }
}
