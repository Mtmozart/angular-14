import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: "Aprendendo angular",
    autoria:'Dev',
    modelo: 'modelo1'
  }

  criarPensamento(){
      alert("Novo pensamento criado.")
  }

  constructor() { }

  ngOnInit(): void {
  }

  cancelarPensamento(){
    alert("Pensamento cancelado")
  }

}
