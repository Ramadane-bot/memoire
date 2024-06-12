import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtilisateurComponent} from "./utilisateur.component";
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";
import * as util from "node:util";

const routes: Routes = [
  {
    path:'utilisateurs',
    component: UtilisateurComponent,
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
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
