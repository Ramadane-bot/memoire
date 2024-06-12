import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MembresComponent} from "./membres.component";
import {EditComponent} from "./components/edit/edit.component";
import {ListComponent} from "./components/list/list.component";

const routes: Routes = [
  {
    path: 'membres',

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
export class MembresRoutingModule {

}
