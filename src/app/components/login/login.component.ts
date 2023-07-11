import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fyt3.googleusercontent.com%2F-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU%3Ds900-c-k-c0x00ffffff-no-rj&tbnid=Be1C4hBRPF1qAM&vet=12ahUKEwiwtZOWp4aAAxXnpycCHUp-Ck8QMygBegUIARDOAQ..i&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fc%2FTeamAvatar%2Fvideos&docid=VGgeDWDySU9i2M&w=900&h=900&q=avatar&hl=fr&ved=2ahUKEwiwtZOWp4aAAxXnpycCHUp-Ck8QMygBegUIARDOAQ'
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ingresar() {
    this.router.navigateByUrl('/dashboard');
  }

}