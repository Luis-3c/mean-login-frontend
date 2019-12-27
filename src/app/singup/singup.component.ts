import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  user: User = {
    name: null,
    email: null,
    password: null
  };
  confirmPass: String;
  correctPasswords: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit(){
    console.log('funciona!!');
  }

  comparePass(searchValue: string) {  
    if(this.user.password != this.confirmPass) 
      this.correctPasswords = false;
    else this.correctPasswords = true;
  }

  signup(){    
    this.authService.signup(this.user).subscribe((data: any) => {
      alert(data.response);
      this.router.navigate(['signin']);
    }, (e) =>{
      alert('Register error, try again');
    });
  }

}
