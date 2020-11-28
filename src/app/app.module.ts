import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KolletComponent } from './kollet/kollet.component';
import { ParentComponent } from './parent/parent.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { HeaderComponent } from './products/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './products/student-list/student-list.component';
import { CreateStudentComponent } from './products/create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './products/update-student/update-student.component';
import { DetailsStudentComponent } from './products/details-student/details-student.component';
import { FooterComponent } from './products/footer/footer.component';
import { AComponent } from './com/a/a.component';
import { BComponent } from './com/b/b.component';
import { FormtemplateComponent } from './com/formtemplate/formtemplate.component';
import { ModeldrivenComponent } from './com/modeldriven/modeldriven.component';
import {ConakryModule} from 'conakry';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    KolletComponent,
    ParentComponent,
    TestComponent,
    ErrorComponent,
    DetailsComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    HeaderComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    DetailsStudentComponent,
    FooterComponent,
    AComponent,
    BComponent,
    FormtemplateComponent,
    ModeldrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,FormsModule,ReactiveFormsModule,ConakryModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
