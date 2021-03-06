import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  private _bashURL = "http://localhost:50664/api/bug/";

  constructor(
    private _http: HttpClient,
    private fb: FormBuilder
  ) { }

  // Bug Form
  BugForm: FormGroup = this.fb.group({
    'Title': [''],
    'Description': [''],
    'projectId': [-1],
    'UserId': [-1],
    'PriorityId': [-1],
    'StatusId': [-1]
  })

  // Bug Status Form
  StatusForm: FormGroup = this.fb.group({
    'BugStatus': ['']
  });

  //Bug Priority Form
  PriorityForm: FormGroup = this.fb.group({
    'BugPriority': ['']
  });

  // Bug
  CreateBug(data: any, image: any) {
    let input = new FormData();
    input.append("Title", data.Title);
    input.append("Description", data.Description);
    input.append("ProjectId", data.projectId);
    input.append("UserId", data.UserId);
    input.append("PriorityId", data.PriorityId);
    input.append("StatusId", "1");
    input.append("file", image);

    return this._http.post<any>(this._bashURL + 'create', input);
  }

  GetAllBugs() {
    return this._http.get<any>(this._bashURL + 'get-all');
  }

  GetBugsByUser(id: number) {
    return this._http.get<any>(this._bashURL + 'get-by-user/' + id);
  }

  GetForTester() {
    return this._http.get<any>(this._bashURL + 'get-for-tester');
  }

  GetDataForCreatebug() {
    return this._http.get<any>(this._bashURL + 'get-data-for-create-bug');
  }

  BugDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'get/' + id);
  }

  ChangeStatus(data: any) {
    return this._http.post<any>(this._bashURL + 'change-status', data);
  }

  DeleteBug(id: number) {
    return this._http.delete<any>(this._bashURL + 'delete/' + id);
  }

  // Bug Status
  GetAllBugStatus() {
    return this._http.get<any>(this._bashURL + 'status/get-all');
  }

  StatusDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'status/get/' + id);
  }

  CreateBugStatus(data: any) {
    return this._http.post<any>(this._bashURL + 'status/create', data);
  }

  DeleteBugStatus(id: number) {
    return this._http.delete<any>(this._bashURL + 'status/delete/' + id);
  }

  // Bug Priority
  GetAllBugPriority() {
    return this._http.get<any>(this._bashURL + 'priority/get-all');
  }

  PriorityDetails(id: number) {
    return this._http.get<any>(this._bashURL + 'priority/get/' + id);
  }

  CreateBugPriority(data: any) {
    return this._http.post<any>(this._bashURL + 'priority/create', data);
  }

  DeleteBugPriority(id: number) {
    return this._http.delete<any>(this._bashURL + 'priority/delete/' + id);
  }
}