import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.css']
})
export class FullCardComponent implements OnInit {

  @Input() ImgUrl: String;
  @Input() Name: string;
  @Input() SubjectsByTeacher: String[];
  @Input() Features: String[];
  @Input() ColorBG: String;
  @Input() ColorBrd: String;
  @Input() ProfileUrl: String;

  public Subjects: String;
  public TypeInformation:String = "Instructor";
  constructor() { }

  ngOnInit(): void {
  }

}
