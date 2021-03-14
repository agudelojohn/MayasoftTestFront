import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-filters',
  templateUrl: './dynamic-filters.component.html',
  styleUrls: ['./dynamic-filters.component.css']
})
export class DynamicFiltersComponent implements OnInit {

  @Input() FilterTitle: String;
  @Input() Filters: String[];


  constructor() { }

  ngOnInit(): void {
  }

}
