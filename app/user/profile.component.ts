import { Component, OnInit, } from '@angular/core'
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { AuthService } from './index'
import { Router } from '@angular/router'

@Component({
  templateUrl:'app/user/profile.component.html',
  styles:[`
            em {float:right; color:#E05C65; padding-left: 10px;}
            input.error { background-color: #E3C3C5; }
           .error ::-webkit-input-placeholder { color: #999; }
           .error ::-moz-placeholder{ color: #999; }
           .error :-moz-placeholder{ color: #999; }
           .error :ms-input-placeholder{ color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
    submitReactiveForm:FormGroup;
    firstName:FormControl;
    lastName:FormControl;
    
    constructor(private authService:AuthService, private router:Router){
    }

    ngOnInit(): void {
      this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, 
        Validators.pattern('[a-zA-Z].*')]);
      this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
      this.submitReactiveForm = new FormGroup({
         firstName: this.firstName,
         lastName:  this.lastName 
      });
    }

    onCancel(){
      this.router.navigate(['events']);
    }

     submitProfile(form:NgForm):void{
        this.authService.updateCurrentUser(form.value.firstName,form.value.lastName);
        this.router.navigate(['events']);
     }

     isValidFirstName():boolean{
       return (this.firstName.valid || this.firstName.untouched);
     }

     isValidLastName():boolean{
       return (this.lastName.valid || this.lastName.untouched);
     }
}