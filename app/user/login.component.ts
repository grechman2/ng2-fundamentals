import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { Logger } from "angular2-logger/core";
import { NgForm } from '@angular/forms'

@Component({
    templateUrl: 'app/user/login.component.html',
    styles:[`
        em { float: right; color:#E05C65; padding-left:10px; }
    `]

})
export class LoginComponent {
    constructor(private authService:AuthService, private router:Router, private logger:Logger){
    }

    public onSubmit(form:NgForm){
        this.authService.loginUser(form.value.userNameKey, form.value.passwordKey);
        this.router.navigate(['events']);
    }

    public onCancel(){
        this.router.navigate(['events']);
    }

}