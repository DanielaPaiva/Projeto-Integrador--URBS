import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { AlertasService } from '../service/alertas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-cadastro',
  templateUrl: './categorias-cadastro.component.html',
  styleUrls: ['./categorias-cadastro.component.css']
})
export class CategoriasCadastroComponent implements OnInit {

  key = 'data'
  reverse = true


  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    let email = localStorage.getItem('email')

    if(email != 'admin@admin.com') {
      this.alert.showAlertDanger('Você precisa ser administrador para acessar essa rota!')
      this.router.navigate(['/home'])
    }

    this.findAllCategoria()

  }

  cadastrar() {


    if (this.categoria.nome == null || this.categoria.descricao == null ) {
      this.alert.showAlertInfo('Preencha todos os campos antes de cadastrar!')
    } else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp
        this.categoria = new Categoria()
        this.alert.showAlertSuccess('Cadastro realizado com sucesso!')
        this.findAllCategoria()
      })
    }
  }



  findAllCategoria() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
      console.log('listaCategorias', this.listaCategorias);

    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }



}
