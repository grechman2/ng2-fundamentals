import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import { 
        IEvent, 
        EventService  
       } from './shared/index'

@Component({
    template: `
       <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                      <event-thumbnail 
                          (click)="handleThumbnailClick(event.name)"
                          [event]="event">
                      </event-thumbnail>
                </div>
            </div>
        </div>
        `
      
})
export class EventsListComponent implements OnInit,OnDestroy{
    events:IEvent[];
    events$: Observable<IEvent[]>;
   
    constructor(private eventService:EventService, private route: ActivatedRoute){
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events'];
    }

    ngOnDestroy(){
    }


} 