import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public id:any;
  public respuesta:any;
  public comentarios:any = [];
  comentarioText:string | undefined;
  public form: FormGroup = new FormGroup({});

  constructor(private route:ActivatedRoute, private restService:RestService, private formBuilder:FormBuilder) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap;
      console.log(params.variable);
      this.cargarData(params.variable);
      this.cargarComentarios();
    })

    this.form = this.formBuilder.group({
      //text: ['', Validators.required]
      textAreaComentario: ['']
    });
  }

  cargarData(id:string) {
    this.restService.get(`https://61decb41fb8dae0017c2e28f.mockapi.io/api/v1/getVideos/${id}`)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
    })
  }

  cargarComentarios() {
    this.restService.get(`https://61decb41fb8dae0017c2e28f.mockapi.io/api/v1/getVideos`)
    .subscribe(respuesta => {
      this.comentarios = respuesta;
    })
  }

  public enviarData() {
    this.restService.post(`https://61decb41fb8dae0017c2e28f.mockapi.io/api/v1/getVideos`,
      {
        text:this.form?.value.textAreaComentario
      }
    )
    .subscribe(respuesta => {
      console.log('comentario enviado!');
    })
  }

}
