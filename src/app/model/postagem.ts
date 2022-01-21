import { tema } from "./tema";
import { Usuario } from "./Usuario";


export class Postagem{
	
    public id: number 
   
    public titulo:String 
	
    public texto: String 

    public data: Date 

    public tema: tema

    public usuario: Usuario

}