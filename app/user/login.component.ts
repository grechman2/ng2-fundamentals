import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { Logger } from "angular2-logger/core";

@Component({
    templateUrl: 'app/user/login.component.html'
})
export class LoginComponent {
    constructor(private authService:AuthService, private router:Router, private logger:Logger){
    }

    public onSubmit(formValues){
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    public onCancel(){
        this.router.navigate(['events']);
    }

}