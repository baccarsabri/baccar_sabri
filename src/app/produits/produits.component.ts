import { Component, OnInit } from '@angular/core';
import { Produits } from '../service.service';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  providers: [ServiceService],
})
export class ProduitsComponent implements OnInit {
pc:any[];
imprimante:any[];
clavier:any[];
t:Produits[];
  constructor(private Service:ServiceService) { }
  ngOnInit() {
  this.pc = this.Service.pc;
  this.imprimante= this.Service.imprimante;
  this.clavier= this.Service.clavier;
  this.t=this.Service.tab;
  }

  SupprimerPc(id:number)
{
 this.pc=this.Service.suppPc(id);
}
SupprimerIm(id:number)
{
 this.imprimante=this.Service.suppIm(id);
}
SupprimerCl(id:number)
{
 this.clavier=this.Service.suppCl(id);
}


}
 
