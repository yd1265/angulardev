import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.css']
})
export class ModeldrivenComponent implements OnInit {

  constructor() { }

  todaydate;
   componentproperty;
   emailid;
   formdata;
   
   ngOnInit() {
    this.formdata = new FormGroup({
       emailid: new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
       ])),
       passwd: new FormControl("")
    });
 }
 onClickSubmit(data) {this.emailid = data.emailid;}
  
}
