import { Component, OnInit } from '@angular/core';
import subjectsJSON from '../../Files/JsonData/subjects.json';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  public Nombre = "FilterTitle";
  public ColorBG: String;
  public ColorBrd: String;
  public Colors: String[][] = [["#D4DBEC", "#21618C"], ["#ECE6D4", "#9A7D0A"], ["#F8D3E3", "#E74C3C"], ["#E6D4EC", "#7D3C98"], ["#D1E5E9", "#2471A3"], ["#C9B68B", "#7D6608"]];
  public i: number;
  public SubjectsArray: {Teacher:String,SubjectTitle:String,Description:String}[] = subjectsJSON;

  public Teachers = ['Subject1','Subject1','Subject13','Subject14','Subject15'];
  constructor() {
    this.i = 0;
  }

  ngOnInit(): void {
  }

  getTotal(): void {
    this.i++;
    if (this.i == 5) {
      this.i = 0;
    }
    this.ColorBG = this.Colors[this.i][0];
    this.ColorBrd = this.Colors[this.i][1];
  }

}
