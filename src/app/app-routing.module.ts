import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeComponent} from "./home/home.component";
import {ForumComponent} from "./forum/forum.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'forum',

    loadChildren: () => import("./forum/forum.module")
      .then((t) =>t.ForumModule)
  },
  {
    path: 'home',
    loadChildren: () => import("./memoire/memoire.module")
      .then((t)=> t.MemoireModule)
  },
  {
    path: 'utilisateurs',
    loadChildren: ()=> import("./utilisateur/utilisateur.module")
      .then((t)=> t.UtilisateurModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
