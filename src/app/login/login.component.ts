import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';
import {Employee} from '../model/employee';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // isLoggedIn = Boolean();
  // isAuth: String;
  username: String;
  password: String;
  isLogin: Boolean;
  wrongLogin: Boolean;


  constructor(private router: Router,
              private routerModule: RouterModule,
              private loginService: LoginService) {
    this.isLogin = false;
    this.wrongLogin = false;
  }


  ngOnInit() {
  }

  login(loginForm: NgForm) {
    const employee: Employee = new Employee(
      loginForm.value.username,
      loginForm.value.password,
      null,
      null,
      null,
      null,
      null
    );
    this.loginService.isAuthorized(employee)
      .subscribe(data => {
          if (data === true) {
            this.wrongLogin = false;
            this.router.navigate([loginForm.value.username]);
          } else {
            this.wrongLogin = true;
          }
        }
      );
  }


  tryagain() {
    this.wrongLogin = false;
  }
}
