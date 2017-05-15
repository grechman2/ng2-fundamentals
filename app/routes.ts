import { Routes } from '@angular/router'
import { EventsListComponent,
         CreateEventComponent,
         CreateSessionComponent
         } from './events/index'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, 
            canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [ EventRouteActivator ] },
    { path: '404', component: Error404Component},
    { path: 'events/session/new', component:  CreateSessionComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren : 'app/user/user.module#UserModule'}
]