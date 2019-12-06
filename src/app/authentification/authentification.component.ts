import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  auth : string ;
  mdp : string ;
  
  constructor(  private lien:Router,private service:ServiceService) { }
  verif(auth:string,mdp:string)
{

  if(this.auth != "admin" || this.mdp != "admin")
  this.lien.navigate(['/authen-erreur']) ;
  else{
  this.lien.navigate(['/produits']);
this.service.auth=true;
  }
}
  ngOnInit() {
  }

}
