import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    MainPageComponent,
  ],
  providers: [
  ],
  entryComponents : []
})
export class MainPageModule { }
