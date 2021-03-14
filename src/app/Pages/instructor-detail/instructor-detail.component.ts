import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  @Input() Name: String;
  @Input() TytleDescription: String;
  @Input() Description: String;

  constructor() { }

  ngOnInit(): void {
  }

}
