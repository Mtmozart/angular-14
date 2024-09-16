import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thoughts',
  templateUrl: './edit-thoughts.component.html',
  styleUrls: ['./edit-thoughts.component.css']
})
export class EditThoughtsComponent implements OnInit {

  pensamento: Thought = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id!).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editarPensamento(){
      this.service.editar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listThoughts'])
      })
  }

  cancelar(){
    this.router.navigate(['/listThoughts'])
  }
}
