import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImgComponent } from './components/lazy-img/lazy-img.component';


@NgModule({
  declarations: [
    SidebarComponent,
    LazyImgComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [SidebarComponent, LazyImgComponent]
})
export class SharedModule { }
