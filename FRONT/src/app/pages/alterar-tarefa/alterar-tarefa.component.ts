import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Categoria } from "src/app/models/categoria.models";
import { Tarefa } from './../../models/tarefa.models';

@Component({
  selector: "app-alterar-tarefa",
  templateUrl: "./alterar-tarefa.component.html",
  styleUrls: ["./alterar-tarefa.component.css"],
})
export class AlterarTarefaComponent {
  tarefaId: number = 0;
  titulo: string = "";
  descricao: string = "";
  categoriaId: number = 0;
  categorias: Categoria[] = [];


  constructor(
    private client: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parametros) => {
        let { id } = parametros;
        this.client.get<Tarefa>(`https://localhost:7015/api/tarefa/buscar/${id}`).subscribe({
          next: (tarefa) => {
            this.client.get<Categoria[]>("https://localhost:7083/api/categoria/listar").subscribe({
              next: (categorias) => {
                this.categorias = categorias;

                this.tarefaId = tarefa.tarefaId!;
                this.titulo = tarefa.titulo;
                this.descricao = tarefa.descricao;
                this.categoriaId = tarefa.categoriaId;
                
              },
              error: (erro) => {
                console.log(erro);
              },
            });
          },
          //Requisição com erro
          error: (erro) => {
            console.log(erro);
          },
        });
      },
    });
  }

  alterar(): void {
    let produto: Tarefa = {
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco!,
      quantidade: this.quantidade!,
      categoriaId: this.categoriaId,
    };

    console.log(produto);

    this.client.put<Produto>(`https://localhost:7083/api/produto/alterar/${this.produtoId}`, produto).subscribe({
      //A requição funcionou
      next: (produto) => {
        this.snackBar.open("Produto alterado com sucesso!!", "E-commerce", {
          duration: 1500,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["pages/produto/listar"]);
      },
      //A requição não funcionou
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}