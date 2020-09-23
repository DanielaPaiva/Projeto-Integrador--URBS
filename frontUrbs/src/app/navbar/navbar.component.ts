import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  sair() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }
  
  // scroll() {
  //     var navbar = document.querySelector('nav')
  //     var cor = document.getElementById('cor')
  //   window.onscroll = () => {
  //     if (window.pageYOffset != 0) {
  //       navbar.style.backgroundImage = 'linear-gradient(45deg, hsla(148, 72%, 55%, 1) 27%, hsla(201, 49%, 33%, 1) 88%)'
  //       cor.style.color = 'white'
  //     } else {
  //       navbar.style.backgroundColor = 'transparent';
  //       cor.style.color = 'black'
  //     }
  //   }
  // }

}
