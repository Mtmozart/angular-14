import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent implements OnInit {

  pensamento: Thought = {

    conteudo: "",
    autoria:'',
    modelo: 'modelo1'
  }

  criarPensamento(){
     this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listThoughts"])
     });
  }

  constructor(private service: ThoughtService, private router: Router) { }

  ngOnInit(): void {
  }

  cancelarPensamento(){
    this.router.navigate(["/listThoughts"])
  }

}
