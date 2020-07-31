import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  value = 0;

  color = 'yellow';
  colorName = 'red';
  fontWeight = 'bold';
  borderStyle = '1px solid black';
  isBordered = true;
  isColor = true;

  constructor() { }

  ngOnInit(): void {
  }

  nextChoice() {
    this.value++;
  }


}
