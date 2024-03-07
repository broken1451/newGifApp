import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';
import { GIFResponse } from '../models/gif.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _tagHistory: string[] = [];
  public gifList!: GIFResponse;
  
  constructor(private http: HttpClient) { 
    this.loadLocal();
  }


  get tagHistory(){
    return [...this._tagHistory];
  }


  searchTag(tag: string): Subscription | Observable<GIFResponse>{

    if (tag.trim().length === 0) {
      return new Observable<GIFResponse>(); // Return an empty observable
    }

    this.organizeHistory(tag);

    const params = new HttpParams().set('api_key', environment.apiKey).set('q', tag).set('limit', '10');
    return this.http.get<GIFResponse>(`${environment.apiUrl}/search`, {params}).pipe(
      take(1)
    ).subscribe(res => { 
      this.gifList = res;
    });
  }


  private saveLocal(){
    localStorage.setItem('tagHistory', JSON.stringify(this._tagHistory));
  }

  private loadLocal(){
    const history = localStorage.getItem('tagHistory');
    if (history) {
      this._tagHistory = JSON.parse(history);
    } 
    if (this.tagHistory.length == 0) {
       return;
    } else {
      this.searchTag(this.tagHistory[0]);
    }
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(t => {
        return t !== tag;
      });
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10);
    this.saveLocal();
  }

}
