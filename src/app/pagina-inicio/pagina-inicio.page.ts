import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.page.html',
  styleUrls: ['./pagina-inicio.page.scss'],
})
export class PaginaInicioPage implements OnInit {
  user:any;

  constructor(private authService: AuthService) {}

  ionViewDidEnter() {
    // Se llama cada vez que la página se muestra
    this.user = this.authService.getUserFromLocalStorage();
  }

  ngOnInit() {
  }

}
