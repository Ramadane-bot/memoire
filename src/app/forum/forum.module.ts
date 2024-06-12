import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';
import {ForumRoutingModule} from "./forum-routing.module";
import {MembresModule} from "./membres/membres.module";
import {PostModule} from "./post/post.module";



@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    CommonModule,
    MembresModule,
    PostModule,
    ForumRoutingModule
  ]
})
export class ForumModule {

}
