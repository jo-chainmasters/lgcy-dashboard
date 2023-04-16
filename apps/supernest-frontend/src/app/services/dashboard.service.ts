import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  public getDashboardData() {
    return this.http
      .get('https://indexer.legacy.chainmasters.ninja/dashboard')
      .pipe(map(DashboardService.mapDashboardData));
  }

  private static mapDashboardData(data: any) {
    return data;
  }
}
