import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
@Input()
 myfunction

 @Output()
 envoyerMessage = new EventEmitter();
//  var  ={
//    firstName:"Dian",
//    lastName: "Salamane",
//    email:'ds@gmail.com'
//  }


  constructor() { }

  ngOnInit(): void {
  }

    bonjour(){
      this.myfunction;

    }


    envoy(){
      this.envoyerMessage.emit(this.myfunction);
    }

}
