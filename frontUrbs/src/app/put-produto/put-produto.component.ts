import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { CategoriaService } from '../service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.idProduto = this.route.snapshot.params["id"]
    this.findByIdProduto(this.idProduto)

    this.findAllCategorias()
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
    this.produto = resp
  })
}

  salvar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.router.navigate(['/admin'])
      this.alert.showAlertSuccess('Produto alterado com sucesso!')
    }, err => {
      if (err.status == 500) {
        this.alert.showAlertInfo('Preencha todos os campos antes de enviar.')
      }
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

}
