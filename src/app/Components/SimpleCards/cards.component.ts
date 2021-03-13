import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public Name: string;
  public SubjectsByTeacher: string;
  public Feature: String;
  constructor() {
    this.Name = "JOhn";
    this.SubjectsByTeacher = "Mats,Geo";
    this.Feature = "Funny";
  }

  ngOnInit(): void {
  }

}
