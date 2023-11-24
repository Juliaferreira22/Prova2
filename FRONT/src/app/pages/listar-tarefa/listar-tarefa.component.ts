import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Tarefa } from "src/app/models/tarefa.models";

@Component({
  selector: "app-listar-tarefa",
  templateUrl: "./listar-tarefa.component.html",
  styleUrls: ["./listar-taerfa.component.css"],
})
export class ListarTarefaComponent {
  colunasTabela: string[] = [
    "tarefaid",
    "titulo",
    "descricao",
    "categoriaId",

  ];


  tarefas: Tarefa[] = [];

  constructor(private client: HttpClient) {}


  ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
      .subscribe({
        
        next: (taerfas) => {
          this.tarefas = taerfas;
        },
       
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(produtoId: number) {
    this.client
      .delete<Produto[]>(
        `https://localhost:7015/api/tarefa/deletar/${produtoId}`
      )
      .subscribe({
     
        next: (produtos) => {
          this.produtos = produtos;
          
        },
        
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}