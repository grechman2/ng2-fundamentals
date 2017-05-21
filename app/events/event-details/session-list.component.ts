import { Component, Input } from '@angular/core'
import { ISession } from '../shared/event.model'

@Component({
    selector:"session-list",
    template:`
        <div *ngFor = "let session of sessions">
            <p>Name:{{ session.name }}</p>
            <p>Presenter:{{ session.presenter }}</p>
            <p>Duration:{{ session.duration }}</p>
            <p>Level:{{ session.level }}</p>
            <p>Abstract:{{ session.abstract }}</p>
            <p>Voters: {{ voters }}</p>
        </div>
        <br>
    `
})
export class SessionListComponent{

@Input() sessions:ISession[]; 

}