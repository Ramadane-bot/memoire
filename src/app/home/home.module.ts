import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
  ],
  exports: [
    HomeComponent
  ],

  imports: [
    HomeComponent,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,

  ]
})
export class HomeModule {

}
