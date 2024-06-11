import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MemoireModule} from "./memoire/memoire.module";
import {UtilisateurModule} from "./utilisateur/utilisateur.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,


  ],
  imports: [
    UtilisateurModule,
    MemoireModule,
    AuthModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
