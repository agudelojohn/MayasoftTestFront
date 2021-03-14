import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Jsons to read
import Teachers from '../../Files/JsonData/teachers.json';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  @Input() Name: String;
  @Input() ColorBG: String;
  @Input() ColorBrd: String;
  // @Input() TytleDescription: String;
  // @Input() Description: String;

  public InstructorsArray: { ImgUrl: string, Name: String, SubjectsByTeacher: String[], Features:String[],Description: String }[] = Teachers;
  public ImgUrl: string;
  public SubjectsByTeacher: String[];
  public Description: String;
  public Features:String[];

  constructor(private _route: ActivatedRoute) {
    this.Name = this._route.snapshot.paramMap.get('Name');
    this.ColorBG = this._route.snapshot.paramMap.get('ColorBG');
    this.ColorBrd = this._route.snapshot.paramMap.get('ColorBrd');
    this.InstructorsArray.forEach(item => {
      if (item.Name == this.Name) {
        this.ImgUrl = item.ImgUrl;
        this.SubjectsByTeacher = item.SubjectsByTeacher;
        this.Description = item.Description;
        this.Features = item.Features;
      }
    });
  }

  ngOnInit(): void {
  }

}
