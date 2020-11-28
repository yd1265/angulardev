import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KolletComponent } from './kollet/kollet.component';
import { ParentComponent } from './parent/parent.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';
import { StudentListComponent } from './products/student-list/student-list.component';
import { CreateStudentComponent } from './products/create-student/create-student.component';
import { UpdateStudentComponent } from './products/update-student/update-student.component';
import { DetailsStudentComponent } from './products/details-student/details-student.component';


const routes: Routes = [

      {path:'parent', component:ParentComponent},

      {path:'students', component:StudentListComponent},
      
      {path:'create',component:CreateStudentComponent},
     
      {path:'update/:id', component:UpdateStudentComponent},

      {path:'view/:id', component:DetailsStudentComponent},
      
      { path: '', redirectTo: '/test', pathMatch: 'full' },
     
      { path: 'article/:id', component: DetailsComponent },
     
      {path:'kollet', component:KolletComponent, children:[
      
        {path:'test', component:TestComponent}
     
      ]},
      {path:"**", component:ErrorComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
