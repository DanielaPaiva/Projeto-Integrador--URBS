import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { AdminComponent } from './admin/admin.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { CategoriasCadastroComponent } from './categorias-cadastro/categorias-cadastro.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';


const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'categoria', component: CategoriaComponent},
  { path: 'categoria/cadastro', component: CategoriasCadastroComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'produto', component: ProdutoComponent},
  { path: 'produto/:categoria', component: ProdutoComponent},

  { path: 'admin', component: AdminComponent},
  { path: 'put-produto/:id', component: PutProdutoComponent},
  { path: 'delete-produto/:id', component: DeleteProdutoComponent},
  { path: 'delete-produto', component: DeleteProdutoComponent},
  { path: 'put-categoria/:id', component: PutCategoriaComponent},
  { path: 'delete-categoria/:id', component: DeleteCategoriaComponent},
  { path: 'delete-categoria', component: DeleteCategoriaComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
