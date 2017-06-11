import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'
import { ISession } from '../shared/index';

@Component({
   templateUrl:
    '/app/events/event-details/event-details.component.html',
    styles:[`
        .container { padding-left:20px; padding-right:20px; }
        .event-image { height:100px; }
        a {cursor:pointer}
    `] 
})
export class EventDetailsComponent{
    event:any;
    addMode:boolean;
    filterBy:string = 'all';
    sortBy:string = 'votes';

    constructor(private eventService: EventService, private route:ActivatedRoute){

    }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id'])
            this.addMode = false;
        })
    }

    addSession(){
       this.addMode = true; 
    }

    saveNewSession(session:ISession){
        const biggestId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = biggestId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelNewSession(){
        this.addMode = false;
    }
}