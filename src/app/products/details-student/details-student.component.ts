import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {
  student = new Student();
  id:number;

  constructor(private route:ActivatedRoute, private studentService:StudentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id = +params.get('id')
   })
    this.studentService.getStudent(this.id).subscribe(data =>{
      this.student = data;
    }
       
    )

  }

  

}
