import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './Pages/calendar/calendar.component';
import { InstructorsComponent } from './Pages/instructors/instructors.component';
import { StudentsComponent } from './Pages/students/students.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { InstructorDetailComponent } from './Pages/instructor-detail/instructor-detail.component';

const routes: Routes = [
  { path: 'calendarPath', component: CalendarComponent },
  { path: 'instructorsPath', component: InstructorsComponent },
  { path: 'studentsPath', component: StudentsComponent },
  { path: 'subjectsPath', component: SubjectsComponent },
  // { path: 'instructorDetailPath', component: InstructorDetailComponent},
  { path: '', component: InstructorDetailComponent, pathMatch: 'full'},
  { path: 'instructorDetailPath/:Name/:ColorBG/:ColorBrd', component: InstructorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

