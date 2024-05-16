import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path : "auth",
    component: AuthComponent
  },
  {
    path : "not-found",
    component: NotFoundComponent
  },
  {
    path : "",
    redirectTo : "/auth",
    pathMatch : "full"
  },
  {
    path : "**",
    redirectTo : "/not-found",
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
