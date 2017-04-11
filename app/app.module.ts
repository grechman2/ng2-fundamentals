import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { NavBarComponent } from './nav/navbar.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent,
                   EventsListComponent,
                   NavBarComponent],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}