import { Component, OnInit } from '@angular/core';
import { ServiceService, Produits } from '../service.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  identifiant:number;
  prix:number;
  nom:string;
  date:Date;
  marque:string;
  pc:Produits[];

  constructor(private Service:ServiceService) { }

  ngOnInit() {
    this.pc=this.Service.pc;
  }
  modifier()
{

this.Service.modifier(this.identifiant,this.prix,this.nom,this.marque,this.date);
for(let i=0;i<this.pc.length;i++)
console.log(this.pc)

}



}
