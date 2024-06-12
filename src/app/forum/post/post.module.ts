import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "./post.component";
import {PostRoutingModule} from "./post-routing.module";
import {EditComponent} from "./components/edit/edit.component";
import {ListComponent} from "./components/list/list.component";



@NgModule({
  declarations: [
    PostComponent,
    EditComponent,
    ListComponent
  ]
  ,
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
