import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.css']
})
export class InstructorsListComponent implements OnInit {

  @Input() InstructorsArray: {
    ImgUrl: String,
    Name: String,
    SubjectsByTeacher: String[],
    Features: String[]
  }[];
  @Input() View: number;

  public ColorBG: String;
  public ColorBrd: String;
  public Colors: String[][] = [["#D4DBEC", "#21618C"], ["#ECE6D4", "#9A7D0A"], ["#F8D3E3", "#E74C3C"], ["#E6D4EC", "#7D3C98"], ["#D1E5E9", "#2471A3"], ["#C9B68B", "#7D6608"]];
  public i: number;

  constructor() {
    this.i = 0;
  }

  getTotal(): void {
    this.i++;
    if (this.i == 5) {
      this.i = 0;
    }
    this.ColorBG = this.Colors[this.i][0];
    this.ColorBrd = this.Colors[this.i][1];
  }

  ngOnInit(): void {
  }

}
