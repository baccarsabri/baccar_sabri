import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService, Produits} from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ServiceService]
})
export class DetailComponent implements OnInit {
  identifiant:number;
it:Produits;
  
t:Produits[];

  constructor(private activatedRoute:ActivatedRoute,private Service:ServiceService) { }
  ngOnInit() {
  this.identifiant= this.activatedRoute.snapshot.params['identifiant'];
  this.t= this.Service.tab;
  this.chercher(this.identifiant);
  }
  detaill(f):number
{
     var a:number=this.Service.detail(f);
    return a;
}
id:number=this.identifiant;
b=this.detaill(this.id);

tab(){
  for (let j=0;j<7;j++){
    
    console.log(this.b);
    console.log(this.identifiant);
  }
}
chercher(id:number){
  for (let i of this.t){
    if (i.identifiant==id){
      this.it=i;
    }
  }
 }
}

