import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif-service.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>

  constructor(private gifService:GifService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value

    this.gifService.searchTag(newTag)

    console.log(this.gifService.tagsHistory)

    this.tagInput.nativeElement.value = '';
  }
}
