import { Component, OnInit } from '@angular/core';
import { User, userDataLogin } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  signin(){
    this.authservice.signin(this.user).subscribe((data: userDataLogin)=>{
      console.log(data.accessToken);
      localStorage.setItem('token', data.accessToken);
    },(e)=>{
      alert('Login error, try again');
    });
  }

}
