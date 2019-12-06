import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthenErreurComponent } from './authen-erreur/authen-erreur.component';
import { ModifierComponent } from './modifier/modifier.component';



const routes:Routes =[
  {path:'accueil', component:AcceuilComponent},
  {path:'authentification', component:AuthentificationComponent},
  {path:'produits', component:ProduitsComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'produits', pathMatch:'full'},
  {path:'produits/:identifiant', component:DetailComponent},
  {path:'erreur',component:AuthenErreurComponent},
  {path:'modifier',component:ModifierComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
