import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-img',
  templateUrl: './lazy-img.component.html',
  styleUrl: './lazy-img.component.scss'
})
export class LazyImgComponent implements OnInit {

  @Input({required: true}) url!: string;
  @Input({required: true}) title!: string;

  public _isVisible: boolean = false;


  constructor() { }

  ngOnInit(): void {
    
    if (!this.url || !this.title) {
      throw new Error('Attribute url is required');
    }
  }

  onLoading(){
    setTimeout(() => {
      this._isVisible = true;
    }, 1000);
  }
}
