import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Thought } from './thought/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/pensamentos'
  constructor(private http: HttpClient) { }

  listar(): Observable<Thought[]>{
    return this.http.get<Thought[]>(this.API)
  }

  criar(pensamento: Thought):Observable<Thought>{
    return this.http.post<Thought>(this.API, pensamento)
  }

  editar(pensamento: Thought):Observable<Thought>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Thought>(url, pensamento)
  }

  excluir(id: string):Observable<Thought>{
      const url = `${this.API}/${id}`
      return this.http.delete<Thought>(url);
  }

  findById(id: string): Observable<Thought>{
    const url = `${this.API}/${id}`
    return this.http.get<Thought>(url)
  }



}
