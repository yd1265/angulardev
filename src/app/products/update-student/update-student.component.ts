import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from '../model/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student = new Student();
  id: number;
  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
           this.id = +params.get('id')
        })
    this.studentService.getStudent(this.id).subscribe(data =>{
    this.student = data;
    console.log(data);
    })

  }

  updateEmployee(){
   this.studentService.updateStudent(this.id,this.student).subscribe(data =>{
     console.log(data);
    })
    this.router.navigate(['students'])
  }

}
