import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subjects-resume',
  templateUrl: './subjects-resume.component.html',
  styleUrls: ['./subjects-resume.component.css']
})
export class SubjectsResumeComponent implements OnInit {

  @Input() ColorBG: String;
  @Input() Description: String;
  @Input() ImgUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
