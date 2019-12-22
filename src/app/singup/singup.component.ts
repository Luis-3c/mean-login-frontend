import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';


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

  constructor() { }

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

}
