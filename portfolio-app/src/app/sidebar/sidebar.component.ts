import { ServicioDeFavoritosService } from './../servicio-de-favoritos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicioFavorito: ServicioDeFavoritosService) { }
  public listaFavoritos:Array<any> = [];

  ngOnInit(): void {
    this.servicioFavorito.disparadorDeFavoritos.subscribe(data => {
      console.log('Recibiendo data...', data);
      this.listaFavoritos.push(data);
    })
  }

}
