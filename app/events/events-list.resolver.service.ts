import { Resolve } from '@angular/router'
import { Injectable} from '@angular/core'
import { EventService } from './shared/event.service'

@Injectable()
export class EventsListResolver implements Resolve<any>{
    
    constructor(private eventService: EventService){
    }

    resolve(){
        this.eventService.getEvents().map(events=>events);
    }
}