import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@shared/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
