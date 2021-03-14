import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Commons/navbar/navbar.component';
import { InstructorsComponent } from './Pages/instructors/instructors.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { CalendarComponent } from './Pages/calendar/calendar.component';
import { StudentsComponent } from './Pages/students/students.component';
import { CardsComponent } from './Components/Commons/SimpleCards/cards.component';
import { InstructorsListComponent } from './Components/instructors-list/instructors-list.component';
import { DynamicFiltersComponent } from './Components/dynamic-filters/dynamic-filters.component';
import { InstructorDetailComponent } from './Pages/instructor-detail/instructor-detail.component';
import { FullCardComponent } from './Components/Commons/full-card/full-card.component';
import { LargeCardsComponent } from './Components/Commons/large-cards/large-cards.component';
import { InformationDetailComponent } from './Pages/information-detail/information-detail.component';
import { SubjectsResumeComponent } from './Components/subjects-resume/subjects-resume.component';
import { InstructorsResumeComponent } from './Components/instructors-resume/instructors-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InstructorsComponent,
    SubjectsComponent,
    CalendarComponent,
    StudentsComponent,
    CardsComponent,
    InstructorsListComponent,
    DynamicFiltersComponent,
    InstructorDetailComponent,
    FullCardComponent,
    LargeCardsComponent,
    InformationDetailComponent,
    SubjectsResumeComponent,
    InstructorsResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
