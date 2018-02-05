import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service';

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


  constructor(private router: Router,
              private routerModule: RouterModule,
              private loginService: LoginService) {
    this.isLogin = false;
  }


  ngOnInit() {
  }

  isAuthorized(username: String, password: String): void {
    this.loginService.isAuthorized(username, password)
      .subscribe(data => this.isLogin = {...data});

    console.log(this.isLogin);
  }

  login(loginForm: NgForm) {
    this.isAuthorized(loginForm.value.username, loginForm.value.password);
    if ( this.isLogin) {
      this.router.navigate(['dil']);
    }else {
      console.log('wrongpwd');
    }
    console.log(loginForm.value.username);

  }



}
