import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarTarefaComponent } from './pages/listar-tarefa/listar-tarefa.component';
import { CadastrarTarefaComponentn } from './pages/cadastrar-tarefa/cadastrar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTarefaComponent,
    CadastrarTarefaComponentn,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
