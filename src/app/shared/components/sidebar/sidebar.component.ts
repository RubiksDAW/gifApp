import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif-service.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService: GifService) { }

  // De esta forma podemos obtener los valores almacenados en el servicio
  get tags() {
    return this.gifService.tagsHistory
  }


}
