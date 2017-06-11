import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'

@Component({
    templateUrl: 'app/user/login.component.html',
    styles:[`
        em { float: right; color:#E05C65; padding-left:10px; }
    `]

})
export class LoginComponent {
    constructor(private authService:AuthService, private router:Router){
    }

    public onSubmit(form:NgForm){
        console.log("onSubmit():"+form);
        this.authService.loginUser(form.value.userNameKey, form.value.passwordKey);
        this.router.navigate(['events']);
    }

    public onCancel(){
        this.router.navigate(['events']);
    }

}