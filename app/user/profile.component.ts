import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, NgForm } from '@angular/forms'
import { AuthService } from './index'
import { Router } from '@angular/router'

@Component({
  templateUrl:'app/user/profile.component.html'
})
export class ProfileComponent implements OnInit {
    submitReactiveForm:FormGroup
    
    constructor(private authService:AuthService, private router:Router){
    }

    ngOnInit(): void {
      let firstName = new FormControl(this.authService.currentUser.firstName);
      let lastName = new FormControl(this.authService.currentUser.lastName);
      this.submitReactiveForm = new FormGroup({
         firstName:firstName,
         lastName: lastName 
      });
    }

     submitProfile(form:NgForm):void{
        this.authService.updateCurrentUser(form.value.firstName,form.value.lastName);
        this.router.navigate(['events']);
     }
}