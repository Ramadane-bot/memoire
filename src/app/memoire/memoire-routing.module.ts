import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemoireComponent} from "./memoire.component";

const routes: Routes = [
  {
    path: 'home',
    component: MemoireComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoireRoutingModule {

}
