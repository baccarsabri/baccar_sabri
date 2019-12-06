import { Component, OnInit } from '@angular/core';
import { Produits, ServiceService } from '../service.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  providers: [ServiceService]
})
export class AcceuilComponent implements OnInit {
identifiant:number;
prix:number;
marque:string;
date:Date;
nom:string;
pc:Produits[];

  constructor(private Service:ServiceService) { }
  ngOnInit() {
  this.pc= this.Service.pc;
  }
  prod: Produits;
ajout()
{
 let x=this.Service.verifier(this.identifiant);
  if(x)
  {
    this.prod=new Produits(this.nom,this.prix,this.marque,true,"../assets/img1.jpg",this.identifiant,this.date);
    this.Service.ajouter(this.prod);
    for(let i=0;i<this.pc.length;i++){
      console.log(this.pc[i]);
      
    }
    }
  
}



}
