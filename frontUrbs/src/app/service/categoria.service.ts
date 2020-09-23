import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllCategorias() {
    return this.http.get('http://localhost:8080/categoria', this.token)
  }

  getById(id: number) {
    return this.http.get(`http://localhost:8080/categoria/${id}`, this.token)
  }

  getByIdCategoria(id: number) {
    return this.http.get(`http://localhost:8080/categoria/${id}`, this.token)
  }
  getByNameCategory(nome:string){
    return this.http.get(`http://localhost:8080/categoria/nome/${nome}`, this.token)
  }
  postCategoria(categoria: Categoria) {
    return this.http.post('http://localhost:8080/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria) {
    return this.http.put('http://localhost:8080/categoria', categoria, this.token)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`http://localhost:8080/categoria/${id}`, this.token)
  }
}
