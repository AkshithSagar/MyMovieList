import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddforumsComponent } from './addforums/addforums.component';


@NgModule({
  declarations: [AddforumsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    AddforumsComponent
  ]
})
export class AddDataModule { }
