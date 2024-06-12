import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { UtilisateurComponent } from './utilisateur.component';


@NgModule({
  declarations: [
    UtilisateurComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
  CommonModule,
    UtilisateurRoutingModule
  ]
})
export class UtilisateurModule { }
