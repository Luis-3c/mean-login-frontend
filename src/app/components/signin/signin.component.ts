import { Component, OnInit } from '@angular/core';
import { User, userDataLogin } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User = {
    name: null,
    email: null,
    password: null
  };

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signin(){
    this.authservice.signin(this.user).subscribe((data: userDataLogin)=>{
      console.log(data.accessToken);
      localStorage.setItem('token', data.accessToken);
      this.router.navigate(['profile']);
    },(e)=>{
      console.log(e);
      alert(e.error.response);
      this.cleanForm();
    });
  }

  cleanForm(){
    this.user.email = null;
    this.user.password = null;
  }

}
