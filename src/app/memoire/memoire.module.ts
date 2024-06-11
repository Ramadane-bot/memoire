import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoireRoutingModule } from './memoire-routing.module';
import { MemoireComponent } from './memoire.component';


@NgModule({
  declarations: [
    MemoireComponent
  ],
  imports: [
    CommonModule,
    MemoireRoutingModule
  ]
})
export class MemoireModule { }
