import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{


  @ViewChild('search',{}) txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) { }

  ngOnInit(): void {}

  // searchTerm(termino: any){ sin ViewChild
  // console.log();
  // }
  searchTerm(){
    let value = this.txtSearch.nativeElement.value;
    this.gifService.searchTag(value);
    this.txtSearch.nativeElement.value = '';
  }

}
