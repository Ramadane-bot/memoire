import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";

@NgModule({
  declarations: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ],

  imports: [
    FormsModule,
  ]
})
export class AuthModule{

}
