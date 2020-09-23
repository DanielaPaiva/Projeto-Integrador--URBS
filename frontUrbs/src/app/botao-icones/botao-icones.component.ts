import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-botao-icones',
  templateUrl: './botao-icones.component.html',
  styleUrls: ['./botao-icones.component.css']
})
export class BotaoIconesComponent implements OnInit {
  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faYoutube = faYoutube
  faUser = faUser
  isPop = false;

  constructor() {  }

  ngOnInit(): void {
  }
 
  animateButton() {
  if (this.isPop == false) {
    document.getElementById("btn1").style.transform =
      "translateX(-62px) rotate(1080deg)";
    document.getElementById("btn2").style.transform =
      "translateX(-124px) rotate(1080deg)";
    document.getElementById("btn3").style.transform =
      "translateX(-186px) rotate(1080deg)";
    document.getElementById("btn4").style.transform =
      "translateX(-248px) rotate(1080deg)";
    document.getElementById("btn5").style.transform =
      "translateY(-52px) rotate(1080deg)";
    document.getElementById("btn6").style.transform =
      "translateY(-104px) rotate(1080deg)";
    document.getElementById("btn7").style.transform =
      "translateY(-156px) rotate(1080deg)";
    document.getElementById("btn8").style.transform =
      "translateY(-208px) rotate(1080deg)";

    // document.getElementById("btn1").style.transform = "";

    this.isPop = true;
  } else {
    document.getElementById("btn1").style.transform = "translateX(0)";
    document.getElementById("btn2").style.transform = "translateX(0)";
    document.getElementById("btn3").style.transform = "translateX(0)";
    document.getElementById("btn4").style.transform = "translateX(0)";
    document.getElementById("btn5").style.transform = "translateY(0)";
    document.getElementById("btn6").style.transform = "translateY(0)";
    document.getElementById("btn7").style.transform = "translateY(0)";
    document.getElementById("btn8").style.transform = "translateY(0)";

    this.isPop = false;
  }
}
 }
