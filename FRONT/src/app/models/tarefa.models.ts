import { Categoria } from "./categoria.models";

export interface Tarefa{

TarefaId : number; 
Titulo : string; 
Descricao : string;
DateTime : string;
Categoria? : Categoria; 
CategoriaId : number;

}

export { Categoria };
