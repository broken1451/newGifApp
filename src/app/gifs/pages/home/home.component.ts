import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private gifService: GifService) { }

  ngOnInit(): void {
  }


  get gif(){
    return this.gifService.gifList;
  }

}
