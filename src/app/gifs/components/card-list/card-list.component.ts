import { Component, Input } from '@angular/core';
import { GIFResponse } from '../../models/gif.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {

  @Input() gifList!: GIFResponse;

}
