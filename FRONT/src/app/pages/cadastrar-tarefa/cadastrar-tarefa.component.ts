import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/tarefa.models';
import { Categoria } from '../../models/categoria.models';
import { Router } from '@angular/router';


@Component({
    selector: 'app-cadastrar-tarefa',
    templateUrl: './cadastrar-tarefa.component.html',
    styleUrls: ['./cadastrar-tarefa.component.css']
})


export class CadastrarTarefaComponent implements OnInit {

    tarefaid!: number = 0;
    titulo!: string = "";
    descricao!: string = "";
    categorias: Categoria [] = [];
    categoriaId: number = 0;

    
  constructor(
    private client: HttpClient,
    private router: Router,
    
  ) {}

  ngOnInit(): void {
    this.client
      .get<Categoria[]>("https://localhost:7015/api/tarefa/listar")
      .subscribe({
        //A requição funcionou
        next: (caetgorias) => {
          this.categorias = this.categorias;
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }

    cadastrar(): void {
        let tarefa: Tarefa = {

            tarefaid: this.tarefaid,
            titulo: this.titulo,
            descricao: this.descricao,
            categoriaId: this.categoriaId,

        };

        this.client
        .post<Tarefa>("https://localhost:7015/api/tarefa/cadastrar", tarefa)
        .subscribe({
          //A requição funcionou
          next: (produto) => {
           console.log("Produto cadastrado com sucesso!!"), 
            
          },

          //A requição não funcionou
          error: (erro) => {
            console.log(erro);
          },
        });
    }
  }


