import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
res: String;
  constructor(private authService: AuthService, private router: Router) {
    this.loadProfile();
   }

  ngOnInit() {
  }

  loadProfile(){
    this.authService.profile().subscribe((data: any) => {
      this.res = data.response;
    }, (e) =>{
      if(e.status === 401){
        this.router.navigate(['signin']);
      }
    });
  }

}
