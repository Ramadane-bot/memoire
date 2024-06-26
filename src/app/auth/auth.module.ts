import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ],

  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class AuthModule{

}
