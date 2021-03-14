import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instructors-resume',
  templateUrl: './instructors-resume.component.html',
  styleUrls: ['./instructors-resume.component.css']
})
export class InstructorsResumeComponent implements OnInit {

  @Input() ColorBG: String;
  @Input() Description: String;
  @Input() ImgUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
