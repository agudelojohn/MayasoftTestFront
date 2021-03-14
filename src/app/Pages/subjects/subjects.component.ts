import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  public Nombre = "FilterTitle";

  public Teachers = ['Subject1','Subject1','Subject13','Subject14','Subject15'];
  constructor() {

  }

  ngOnInit(): void {
  }

}
