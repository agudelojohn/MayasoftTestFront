import { Component, OnInit } from '@angular/core';
import TeachersJSON from '../../Files/JsonData/teachers.json';


@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  public InstructorsArray:{ImgUrl:string, Name:String, SubjectsByTeacher:String[],Features:String[]}[] = TeachersJSON;
  public FilterNames: String[] = ["Subject","Status","Experience","Location"]

  public Teachers = ['Elemento1','Elemento2','Elemento3'];
  public View:number;

  constructor() {

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

