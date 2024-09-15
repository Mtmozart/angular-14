import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'I love',
    autoria: 'Matheus Mozart',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
