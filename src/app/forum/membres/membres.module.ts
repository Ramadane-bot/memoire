import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MembresRoutingModule} from "./membres-routing.module";
import {MembresComponent} from "./membres.component";
import {EditComponent} from "./components/edit/edit.component";
import {ListComponent} from "./components/list/list.component";



@NgModule({
  declarations: [
    MembresComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MembresRoutingModule
  ]
})
export class MembresModule { }
