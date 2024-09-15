import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Matheus Mozart',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Passando informações para o filho',
      autoria: 'Pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Passando informações para o filho do meio',
      autoria: 'Pai',
      modelo: 'modelo3'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
