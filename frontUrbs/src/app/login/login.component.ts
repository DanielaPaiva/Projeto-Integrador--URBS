import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  user: User = new User()
  senha: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService

  ) { }

  ngOnInit(): void {
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      localStorage.setItem('email', this.userLogin.usuario)
      this.router.navigate(['/home'])
    })
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if ( this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alert.showAlertSuccess('Cadastro efetuado com sucesso!')
      })
    } else {
      this.alert.showAlertDanger('Senhas não conferem!')
    }
  }
}
