import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditComponent} from "./components/edit/edit.component";
import {ListComponent} from "./components/list/list.component";
import {PostComponent} from "./post.component";


const routes: Routes = [
  {
    path: 'post',
    children: [
      {
        path: 'edit',
        component: EditComponent
      },
      {
        path: 'list',
        component: ListComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {

}
