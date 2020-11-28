import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 id;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  //  this.id = this.route.snapshot.paramMap.get('id');


   //this.id = this.route.snapshot.params.id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id =+params.get('id')
    })
  }


  goBack(){
    this.router.navigate(['parent']);
  }
}
