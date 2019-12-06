import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authen-erreur',
  templateUrl: './authen-erreur.component.html',
  styleUrls: ['./authen-erreur.component.css']
})
export class AuthenErreurComponent implements OnInit {

  auth="Nom d'utilisateur" ;
  mdp="Mot de passe"  ;
  
  constructor( private lien:Router ) { }



  ngOnInit() {
  }

}
