import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  identifiant: String;
auth:boolean=false;
checkUser(){

}
  constructor() { }
  pc= new Array ( new Produits("Pc Portable",2100,"asus",true,"../assets/img1.jpg",1000,new Date ("2018-4")),
  new Produits("Pc Portable",1900,"acer",true,"../assets/img2.jpg",1001,new Date ("2017-")), 
  new Produits("Pc Portable",1400,"hp",true,"../assets/img3.jpg",1002,new Date ("2014-5")));
   imprimante= new Array (new Produits("Imprimantes",900,"hp",true,"../assets/img4.jpg",1003,new Date ("2017-9")),
   new Produits("Imprimantes",900,"acer",true,"../assets/img5.jpg",1004,new Date ("2019-1")));
   clavier= new Array (new Produits("Clavier",100,"acer",true,"../assets/img6.jpg",1005,new Date ("2019-1")),
   new Produits("Clavier",120,"ASUS",true,"../assets/img7.jpg",1006,new Date ("2019-7")));


   tab= new Array ( new Produits("Pc Portable",2100,"asus",true,"../assets/img1.jpg",1000,new Date ("2018-4")),
   new Produits("Pc Portable",1900,"acer",true,"../assets/img2.jpg",1001,new Date ("2017-")), 
   new Produits("Pc Portable",1400,"hp",true,"../assets/img3.jpg",1002,new Date ("2014-5")),
     new Produits("Imprimantes",900,"hp",true,"../assets/img4.jpg",1003,new Date ("2017-9")),
    new Produits("Imprimantes",900,"acer",false,"../assets/img5.jpg",1004,new Date ("2019-1")),
      new Produits("Clavier",100,"acer",true,"../assets/img6.jpg",1005,new Date ("2019-1")),
    new Produits("Clavier",120,"ASUS",true,"../assets/img7.jpg",1006,new Date ("2019-7")));
   detail(f:number):number{
     var i:number=0;
    for (let i=0;i<6;i++){
       if(this.tab[i].identifiant!=f){
          i++;
       }
       else{
       return i;
      }
     }
     return i;
     }
     ajouter(p:Produits)
{
   this.pc.push(p);
 }
 verifier(id:number):boolean{

for(let i of this.tab){
  if(i.identifiant==id){
  return false;
}
return true; 

}
 }
 suppPc(identifiant:number):Produits[]
{
for( let i=0 ;i<this.pc.length; i++){
        if(identifiant==this.pc[i].identifiant)
        {
        this.pc.splice(i,1);
        } 
        return this.pc;
  
}
}
suppIm(identifiant:number):Produits[]
{
for( let i=0 ;i<this.imprimante.length; i++){
        if(identifiant==this.imprimante[i].identifiant)
        {
        this.imprimante.splice(i,1);
        } 
        return this.imprimante;
  
}
}
suppCl(identifiant:number):Produits[]
{
for( let i=0 ;i<this.clavier.length; i++){
        if(identifiant==this.clavier[i].identifiant)
        {
        this.clavier.splice(i,1);
        } 
        return this.clavier;
  
}

}
msg:string="identifiant non valide";
prod(identifiant : number):Produits
{
for( let i=0;i<this.pc.length;i++)
{
if(identifiant==this.pc[i].identifiant)
return this.pc[i];
}

console.log(this.msg);
}

modifier(identifiant:number,prix:number,nom:string,marque:string,date:Date)
{
let pro:Produits=this.prod(identifiant);
pro.identifiant=identifiant;
pro.prix=prix;
pro.image="../assets/img1.jpg";
pro.nom=nom;
pro.marque=marque;
pro.date =date;
pro.disponibilite=true;
}
}
   
  

export class Produits
{
constructor(private _nom:string, private _prix: number,
   private _marque:string, private _disponibilité:boolean,
   private _image:string,private _identifiant:number,private _date:Date)
   {}  
    

public get nom(): string {
return this._nom;
}
public set nom(value: string) {
this._nom = value;
}
public get prix(): number {
return this._prix;
}
public set prix(value: number) {
this._prix = value;
}
public get marque(): string {
  return this._marque;
  }
public get identifiant(){
return this._identifiant;
}
public get image(){
  return this._image;
}
public get date(){
  return this._date;
}
public get disponibilite(){
  return this._disponibilité;
}
public set identifiant(value: number) {
  this._identifiant = value;
  }
  public set image(value: string) {
    this._image = value;
    }
    public set marque(value: string) {
this._marque = value;
}
public set date(value: Date) {
  this._date= value;
  }
  public set disponibilite (value: boolean) {
    this._disponibilité = value;
    }
}
