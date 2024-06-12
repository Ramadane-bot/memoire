import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForumComponent} from "./forum.component";
import {MembresComponent} from "./membres/membres.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {
    path: 'forum',
    component: ForumComponent,
    children: [
      {
        path: 'post',
        component: PostComponent,
        loadChildren: () => import("./post/post.module")
          .then((t) =>t.PostModule)
      },
      {
        path: 'membres',
        component: MembresComponent,
        loadChildren: () => import("./membres/membres.module")
          .then((t) =>t.MembresModule)
      },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule {

}
