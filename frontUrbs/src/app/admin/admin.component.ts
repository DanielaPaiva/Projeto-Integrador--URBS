import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  key = 'data'
  reverse = true

  produto: Produto = new Produto()
  listaProdutos: Produto[];
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private alert: AlertasService,
  ) { }

  ngOnInit() {
    let email = localStorage.getItem('email')

    if(email != 'admin@admin.com') {
      this.alert.showAlertDanger('Você precisa ser administrador para acessar essa rota!')
      this.router.navigate(['/home'])
    }

    this.findAllProdutos()
    this.findAllCategoria()

  }

  cadastrar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    if (this.produto.nome == null || this.produto.descricao == null || this.produto.categoria == null || this.produto.preco == null) {
      this.alert.showAlertInfo('Preencha todos os campos antes de cadastrar!')
    } else {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        this.produto = new Produto()
        this.alert.showAlertSuccess('Cadastro realizado com sucesso!')
        this.findAllProdutos()
      })
    }
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    })
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

  findByidProduto() {
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }
}
