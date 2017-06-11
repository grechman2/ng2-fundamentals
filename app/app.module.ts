import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import {
       EventsListComponent,
       EventThumbnailComponent,
       EventDetailsComponent,
       CreateEventComponent,
       EventService,
       EventRouteActivator,
       CreateSessionComponent,
       SessionListComponent,
       DurationPipe,
       UpvoteComponent
       } from './events/index'
import { AuthService } from './user/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { TOASTR_TOKEN,
         JQUERY_TOKEN,
         Toastr,   
         CollapsibleWellComponent,
         SimpleModalComponent,
         ModalTriggerDirective
        } 
        from './common/index'
import { Error404Component } from './errors/404.component'
import { Logger } from "angular2-logger/core";
import { appRoutes } from './routes'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

declare let toastr:Toastr;
declare let jQuery:Object;
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [EventsAppComponent,
                   EventsListComponent,
                   EventThumbnailComponent,
                   EventDetailsComponent,
                   CreateEventComponent,
                   Error404Component,
 		           NavBarComponent,
                   CreateSessionComponent,
                   SessionListComponent,
                   CollapsibleWellComponent,
                   SimpleModalComponent,
                   DurationPipe,
                   ModalTriggerDirective,
                   UpvoteComponent ],
    providers: [
                EventService,    
                EventRouteActivator,
                AuthService,
                {
                    provide: 'canDeactivateCreateEvent',
                    useValue: checkDirtyState
                },
                {
                    provide: TOASTR_TOKEN,
                    useValue: toastr
                },
                {
                    provide: JQUERY_TOKEN,
                    useValue: jQuery   
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
