import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../models/gif.interface';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.scss'
})
export class GifsCardComponent implements OnInit{

  @Input({required: true}) item!: Gif;

  constructor() { }

  ngOnInit(): void {
    
    if (!this.item) {
      throw new Error('item is required');
    }
  
  }
}
