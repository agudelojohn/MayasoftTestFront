import { Component, OnInit } from '@angular/core';
import Teachers from '../../Files/JsonData/teachers.json';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  public InstructorsArray:{ImgUrl:string, Name:String, SubjectsByTeacher:String[]}[] = Teachers;
  public Nombre = "Title";
  public FeaturesList: String[] = ["1", "2", "3"];
  public Teachers: String[] = ["Element1", "Element2", "Element3"];

  public Features: String[];
  public View:number;

  constructor() {
    this.Features = ["El1","El2","El3"];
    this.View = 1;
  }

  ngOnInit(): void {
  }

  changeView(){
    if (this.View == 0){
      this.View = 1;
    }else{
      this.View = 0;
    }
  }

}

