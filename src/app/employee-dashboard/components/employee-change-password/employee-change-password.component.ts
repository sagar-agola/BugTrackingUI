import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-change-password',
  templateUrl: './employee-change-password.component.html',
  styleUrls: ['./employee-change-password.component.css']
})
export class EmployeeChangePasswordComponent implements OnInit {

  hasError: boolean = false;
  error: string = "";
  model: any = {};

  constructor(
    private _router: Router,
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() {
  }

  OnSubmit() {
    if(this.Validate()) {
      this._employeeService.ChangePassword(this._employeeService.changePasswordForm.value).subscribe(
        res => {
          if(res['Success']) {
            this._employeeService.changePasswordForm.reset();
            this._router.navigate(['employee/profile']);
          }
          else {
            if(res['Data'] == null) 
              this.error = "You have entered wrong password.";
            this.hasError = true;
          }
        },
        err => 
          this.hasError = true
      );
    }
    else {
      this.error = "Password and Confirm password did not match.";
      this.hasError = true;
    }
  }

  Validate(): boolean {
    let pwd: string = (<HTMLInputElement>document.getElementById('NewPassword')).value;
    let confirmPwd: string = (<HTMLInputElement>document.getElementById('ConfirmPassword')).value;

    if(pwd == confirmPwd)
      return true;
    else  
      return false;
  }

}
