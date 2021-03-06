import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _bashURL = "http://localhost:50664/api/dashboard";

  constructor(
    private _http: HttpClient
  ) { }

  GetSystemOverview() {
    return this._http.get<any>(this._bashURL + "/system-overview");
  }
}
