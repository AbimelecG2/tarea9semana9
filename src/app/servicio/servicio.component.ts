import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent{

  constructor(public Servicio: ServicioService) {}

  ngOnInit() {
  this.Servicio.getAlbums();
  }


}
