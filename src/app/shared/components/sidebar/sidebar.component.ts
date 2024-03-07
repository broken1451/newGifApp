import { Component, OnInit } from '@angular/core';
import { GifService } from '../../../gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  get tagHistory(){
    return this.gifService.tagHistory;
  }

  constructor(private gifService: GifService) { }

  ngOnInit(): void {
  }


  search(tag: string){
    this.gifService.searchTag(tag);
  }
}
