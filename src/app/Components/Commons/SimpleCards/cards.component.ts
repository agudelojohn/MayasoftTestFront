import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  @Input() ImgUrl: String;
  @Input() Name: string;
  @Input() SubjectsByTeacher: string;
  @Input() Features: String[];
  @Input() ColorBG: String;
  @Input() ColorBrd: String;
  @Input() ProfileUrl: String;

  constructor() {
  }

  ngOnInit(): void {
  }

}
