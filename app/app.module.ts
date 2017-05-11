import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import {
       EventsListComponent,
       EventThumbnailComponent,
       EventDetailsComponent,
       CreateEventComponent,
       EventService,
       EventRouteActivator
} from './events/index'
import { AuthService } from './user/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { Error404Component } from './errors/404.component'
import { Logger } from "angular2-logger/core";
import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [EventsAppComponent,
                   EventsListComponent,
                   EventThumbnailComponent,
                   EventDetailsComponent,
                   CreateEventComponent,
                   Error404Component,
 		           NavBarComponent],
    providers: [ToastrService,
                EventService,    
                EventRouteActivator,
                AuthService,
                {
                    provide: 'canDeactivateCreateEvent',
                    useValue: checkDirtyState
                },
                Logger,
                ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
        return window.confirm("You have not saved this event, do you really want to cancel");
    return true;
}
