import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { ProdutoService } from '../service/produto.service';
import { CategoriaService } from '../service/categoria.service';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  key = 'data'
  reverse = true

  produto: Produto = new Produto()
  listaProdutos: Produto[];

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  nomeCategoria: string

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alert: AlertasService,
    private route:ActivatedRoute,
    private alertService: AlertasService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.nomeCategoria = this.route.snapshot.params['categoria']

    this.findCategoriaByName(this.nomeCategoria)

    this.findAllProdutos()

  }

  findCategoriaByName(nome:string){
    this.categoriaService.getByNameCategory(nome).subscribe((resp:Categoria[])=>{
      this.listaCategorias = resp
    })
  }
  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    })
  }

  cadastrar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    if (this.produto.nome == null || this.produto.descricao == null || this.produto.categoria == null || this.produto.preco == null) {
      this.alert.showAlertDanger('Preencha todos os campos antes de cadastrar!')
    } else {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        this.produto = new Produto()
        this.alert.showAlertSuccess('Cadastro realizado com sucesso!')
        this.findAllProdutos()
      })
    }
  }

  findAllCategoria() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp

    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  coleta() {
    this.alert.showAlertSuccess('Obrigado por ajudar o nosso planeta!')
  }

}
