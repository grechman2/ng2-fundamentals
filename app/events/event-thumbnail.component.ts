import {Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './index'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well howerwell thumbnail">
                 <h2>{{event.name}}</h2>
                <div>Date: {{event.date | date:"shortDate" }}</div>
                <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time" >
                    Time: {{event.time}}
                    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                    <span *ngSwitchDefault>(Normal Start)</span>
                </div>
                <div>Price: {{event.price | currency:"USD":true }}</div>
                <div>
                    <span>Location: {{event?.location?.address}}</span>
                    <span class='pad-left'></span>
                    <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
                </div>
        </div>
    `,
    styles:[`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .yellow { color: #FF9933 !important;  }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
    `]
})
export class EventThumbnailComponent{
 @Input('event') event:IEvent;

 getStartTimeClass(){
     const isEarlyStart = this.event && this.event.time === '8:00 am';
     if(isEarlyStart){
         return "green bold";
    }else{
        return "";
    }
     
 }
  
}