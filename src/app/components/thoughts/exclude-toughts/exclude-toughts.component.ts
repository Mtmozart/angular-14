import { Thought } from './../thought/thought';
import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exclude-toughts',
  templateUrl: './exclude-toughts.component.html',
  styleUrls: ['./exclude-toughts.component.css']
})
export class ExcludeToughtsComponent implements OnInit {
  pensamento: Thought = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(private service: ThoughtService, private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id!).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento(){
    const id = this.route.snapshot.paramMap.get('id')
    if(id){
      this.service.excluir(id).subscribe(() =>{
        this.router.navigate(['/listThoughts'])
      })

    }

  }

  cancelar(){
  this.router.navigate(['/listThoughts'])
  }
}
