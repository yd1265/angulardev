import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';


@Component({
  selector: 'app-kollet',
  templateUrl: './kollet.component.html',
  styleUrls: ['./kollet.component.css']
})
export class KolletComponent implements OnInit {
   myObservable = of('apple', 'orange', 'grappe');

  constructor() {
    this.myObservable.subscribe(value => console.log(value));
   // this.myObservable.subscribe(a=> console.log(a));
   }

  ngOnInit(): void {
  }



  goback(){

  }
}
