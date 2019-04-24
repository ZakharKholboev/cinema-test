import { NgModule } from '@angular/core';
import { SharedMaterialModule } from './shared-material.module';
import { SafePipe } from '../pipes/safe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({

  declarations: [
    SafePipe
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedMaterialModule
  ],

  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedMaterialModule,
    SafePipe
  ]

})
export class SharedModule {}
