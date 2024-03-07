import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CardListComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule,
    SharedModule
  ],
  exports: [HomeComponent, SearchComponent, CardListComponent]
})
export class GifsModule { }
