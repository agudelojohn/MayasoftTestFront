import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  @Input() Name: string;
  @Input() SubjectsByTeacher: string;
  @Input() Features: String[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
