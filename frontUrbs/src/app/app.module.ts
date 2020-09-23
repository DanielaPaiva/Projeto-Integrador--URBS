import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule }from 'ngx-order-pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { AdminComponent } from './admin/admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { AlertasComponent } from './alertas/alertas.component';
import { CategoriasCadastroComponent } from './categorias-cadastro/categorias-cadastro.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { BotaoIconesComponent } from './botao-icones/botao-icones.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    FooterComponent,
    NavbarComponent,
    CadastroComponent,
    LoginComponent,
    CategoriaComponent,
    ProdutoComponent,
    AdminComponent,
    PutProdutoComponent,
    DeleteProdutoComponent,
    AlertasComponent,
    CategoriasCadastroComponent,
    PutCategoriaComponent,
    DeleteCategoriaComponent,
    BotaoIconesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
