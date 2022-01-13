import { RestService } from '../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listaVideos:any = [];

  constructor(private restService:RestService) {

  }

  ngOnInit(): void {
    /**this.listaVideos = [
      {
        title: 'Video 1',
        subtitle: 'Subtitle video 1',
        image: 'https://picsum.photos/536/354'
      },
      {
        title: 'Video 2',
        subtitle: 'Subtitle video 2',
        image: 'https://picsum.photos/536/354'
      },
      {
        title: 'Video 3',
        subtitle: 'Subtitle video 3',
        image: 'https://picsum.photos/536/354'
      }
    ]*/

    this.cargarData();
  }

  public cargarData() {
    this.restService.get("https://61decb41fb8dae0017c2e28f.mockapi.io/api/v1/getVideos")
    .subscribe(respuesta => {
      //console.log(respuesta);
      this.listaVideos = respuesta;
    })
  }

}
