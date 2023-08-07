import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpService: HttpService) {}

  public getDashboardData() {
    return this.httpService
      .get('dashboard')
      .pipe(map(DashboardService.mapDashboardData));
  }

  private static mapDashboardData(data: any) {
    return data;
  }
}
