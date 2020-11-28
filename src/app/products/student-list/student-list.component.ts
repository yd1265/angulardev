import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 students :Student[];

  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
  
  this.getEmployees();
  }

   getEmployees(){
    this.studentService.getStudents().subscribe(data =>{
      this.students = data;
   });
   }

  update(id:number){
   this.router.navigate(['update',id]);
  }


  delete(id:number){
    this.studentService.deleteStudent(id).subscribe(data =>{
        console.log(data);
        this.getEmployees();
    })
    
  }
  view(id:number){
    this.router.navigate(['view',id]);
  }

}
