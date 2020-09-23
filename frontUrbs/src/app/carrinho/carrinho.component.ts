import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }
 /*<script>
            function process(quant) {
                let value = parseInt(document.getElementById("quant").value);
                value += quant;
                if (value < 1) {
                    document.getElementById("quant").value = 1;
                } else {
                    document.getElementById("quant").value = value;
                }
            }
        </script>*/

        add(num1) {
          let num = num1
          num++
        }
        sub() {
          let num = 0
          num--
        }

}
