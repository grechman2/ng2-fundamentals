import { Component } from '@angular/core'


@Component({
    selector: 'events-app',
    template: 
    `
    <nav-bar></nav-bar>
    <events-list></events-list>
    `,
})
export class EventsAppComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location:{
            adress: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

}