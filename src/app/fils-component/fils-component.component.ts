import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils-component',
  templateUrl: './fils-component.component.html',
  styleUrls: ['./fils-component.component.css']
})
export class FilsComponentComponent implements OnInit {
  @Input() nameColor: any;
  @Output() sendRequestData = new EventEmitter();
  constructor() { }

  ngOnInit(): any {
    console.log("La couleur héritée est : ", this.nameColor);
  };

  value = {
    id: 1,
    nom: "Stéphane",
    titre:"FullStack"
  }

  sendEvent() {
    this.sendRequestData.emit(
      this.value
    );
  }
}
