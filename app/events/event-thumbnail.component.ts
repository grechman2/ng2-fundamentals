import {Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well howerwell thumbnail">
                 <h2>{{event.name}}</h2>
                <div>Date: {{event.date}}</div>
                <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time" >
                    Time: {{event.time}}
                    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                    <span *ngSwitchDefault>(Normal Start)</span>
                </div>
                <div>Price: \${{event.price}}</div>
                <div>
                    <span>Location: {{event.location.address}}</span>
                    <span class='pad-left'></span>
                    <span>{{event.location.city}}, {{event.location.country}}</span>
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
 @Input('event') event:any;

 getStartTimeClass(){
     const isEarlyStart = this.event && this.event.time === '8:00 am';
     if(isEarlyStart){
         return "green bold";
    }else{
        return "";
    }
     
 }
  
}