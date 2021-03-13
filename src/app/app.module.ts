import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { InstructorsComponent } from './Pages/instructors/instructors.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { CalendarComponent } from './Pages/calendar/calendar.component';
import { StudentsComponent } from './Pages/students/students.component';
import { CardsComponent } from './Components/simplecards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InstructorsComponent,
    SubjectsComponent,
    CalendarComponent,
    StudentsComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
