import { Component, OnInit } from '@angular/core'
import { AuthService } from './user/index' 


@Component({
    selector: 'events-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
        `,
})
export class EventsAppComponent implements OnInit {
    constructor(private auth: AuthService){
    }

    ngOnInit(){
        this.auth.checkAuthenticationStatus();
    }
}