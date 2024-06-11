import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  {
    path : "auth",
    component: AuthComponent
  },
  {
    path: "home",
    children:[
      {
        path: "",
        loadChildren: ()=> import('./memoire/memoire.module')
          .then((m)=> m.MemoireModule),
        pathMatch: "full"
      }
    ]
  },
  {
    path : "utilisateurs",
    loadChildren: ()=> import('./utilisateur/utilisateur.module')
      .then((m)=> m.UtilisateurModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
