import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor() { }

  message;

  ngOnInit(): void {
  }
  receiver(event){
this.message = event;
  }

  direbonjour(){
    return "Bonjour nous testons compoent com";
  }

}
