import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-large-cards',
  templateUrl: './large-cards.component.html',
  styleUrls: ['./large-cards.component.css']
})
export class LargeCardsComponent implements OnInit {

  @Input() ColorBG:String;
  @Input() ColorBrd:String;
  @Input() SubjectTitle:String;
  @Input() InstructorWhoGive:String;
  @Input() Description: String;
  @Input() Features: String[];

  constructor() { }

  ngOnInit(): void {
  }

}
