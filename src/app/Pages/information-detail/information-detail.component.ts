import { Component, OnInit, Input, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Jsons to read
import Teachers from '../../Files/JsonData/teachers.json';
import Subjects from '../../Files/JsonData/subjects.json';

@Component({
  selector: 'app-information-detail',
  templateUrl: './information-detail.component.html',
  styleUrls: ['./information-detail.component.css']
})
export class InformationDetailComponent implements OnInit {

  @Input() Name: String;
  @Input() ColorBG: String;
  @Input() ColorBrd: String;
  @Input() TypeInformation: String;

  public InstructorsArray: { ImgUrl: string, Name: String, SubjectsByTeacher: String[], Features: String[], Description: String }[] = Teachers;
  public SubjectsArray: { Teacher: string, SubjectTitle: String, Description: String, ImgData: string }[] = Subjects;
  public ImgUrl: string;
  public ImgSubjectData: string;
  public SubjectsByTeacher: String[];
  public Description: String;
  public Features: String[];
  public InstructorName:String;
  public PreviousPage:String;

  constructor(private _route: ActivatedRoute) {
    this.Name = this._route.snapshot.paramMap.get('Name');
    this.ColorBG = this._route.snapshot.paramMap.get('ColorBG');
    this.ColorBrd = this._route.snapshot.paramMap.get('ColorBrd');
    this.TypeInformation = this._route.snapshot.paramMap.get('TypeInformation')
    this.PreviousPage = this._route.snapshot.paramMap.get('PreviousPage')
    if (this.TypeInformation == 'Instructor') {
      this.InstructorsArray.forEach(item => {
        if (item.Name == this.Name) {
          this.ImgUrl = item.ImgUrl;
          this.SubjectsByTeacher = item.SubjectsByTeacher;
          this.Description = item.Description;
          this.Features = item.Features;
          this.InstructorName = item.Name;
        }
      });
    }else{
      this.SubjectsArray.forEach( sub => {
        if (sub.SubjectTitle == this.Name){
          this.Description = sub.Description;
          this.InstructorName = sub.Teacher;
          this.ImgSubjectData = sub.ImgData;
          this.InstructorsArray.forEach(item => {
            if (item.Name == sub.Teacher) {
              this.ImgUrl = item.ImgUrl;
              this.SubjectsByTeacher = item.SubjectsByTeacher;
              this.Features = item.Features;
              this.InstructorName = item.Name;
            }
          });
        }
      });
    }
  }

  ngOnInit(): void {
  }

}
