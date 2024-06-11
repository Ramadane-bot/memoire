import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtilisateurComponent} from "./utilisateur.component";
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: 'utilisateurs',
    component: UtilisateurComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'edit',
        component: EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
