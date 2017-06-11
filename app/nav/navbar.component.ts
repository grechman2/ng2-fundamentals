import { Component, OnChanges } from '@angular/core'
import { AuthService } from '../user/index'
import { ISession, EventService } from '../events/index'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles:[`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px ) {#searchForm { display:none }}
        li > a.active { color: #ff9933 }
    `]
})
export class NavBarComponent {
        
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(private auth:AuthService, private eventService:EventService){
    }

    searchSessions(searchTerm){
         console.log("xxx:");
        this.eventService.searchSessions(searchTerm)
                    .subscribe(sessions =>{
                         this.foundSessions = sessions
                         console.log("searchSessionsResult:"+ JSON.stringify(this.foundSessions));
                    });
        
    }
}