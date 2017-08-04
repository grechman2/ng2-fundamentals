import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { 
        IEvent, 
        EventService  
       } from './shared/index'

@Injectable()
export class EventListComponentResolver implements Resolve<IEvent>{

    constructor(private eventService:EventService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        console.log("Resolver is invoked!");
        return this.eventService.getEvents();
    }

}

