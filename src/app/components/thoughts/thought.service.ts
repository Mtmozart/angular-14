import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Thought } from './thought/thought';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/pensamentos'
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Thought[]>(this.API)
  }

}
