import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { PipePipe } from './pipe.pipe';
import {ServiceService} from './service.service';
import { DetailComponent } from './detail/detail.component';
import {FormsModule} from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthenErreurComponent } from './authen-erreur/authen-erreur.component';
import { ModifierComponent } from './modifier/modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ProduitsComponent,
    ContactComponent,
    MenuComponent,
    ListproduitComponent,
    PipePipe,
    DetailComponent,
    AuthentificationComponent,
    AuthenErreurComponent,
    ModifierComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  

})
@Component({
  selector:'app-root',
  providers: [ServiceService],
  })
export class AppModule { }
