import { Categoria } from "./categoria";

export class Oferta{
  id!:number;
  titulo!:string;
  descricaoBreve!: string;
  image!: string;
  valor!:number;
  categoria:Categoria = new Categoria();
  detalhes!: string[ ];
  destaques!:string [ ];
}
