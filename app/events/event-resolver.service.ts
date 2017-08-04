import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { IEvent, EventService } from './shared/index'

@Injectable()
export class EventResolver implements Resolve<IEvent>{

    constructor(private eventService: EventService){
    }

    resolve(route: ActivatedRouteSnapshot){
        return this.eventService.getEvent(route.params['id']);
    }

}