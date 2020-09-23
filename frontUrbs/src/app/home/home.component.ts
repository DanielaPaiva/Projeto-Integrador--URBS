import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private alert: AlertasService,
    private router: Router,
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
  }

  semSac() {
    this.router.navigate(['/contato'])
    this.alert.showAlertInfo('Desculpe, ainda não temos uma central de atendimento.')
  }
}
