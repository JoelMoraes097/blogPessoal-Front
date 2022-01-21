import { Postagem } from "./postagem";


export class Usuario{

    public id: number;

    public nome: string;

    public foto: string;

    public usuario: String;

    public senha: String;

    public tipo: String;

    public postagem: Postagem[];
}