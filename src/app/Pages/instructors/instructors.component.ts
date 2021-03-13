import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  public Nombre = "JJ";
  public Subs: String = "Uno,Dos,Tres";
  public FeaturesList: String[] = ["1","2","3"];

  constructor() {
   }

  ngOnInit(): void {
  }

}

