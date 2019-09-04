import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [ItemListComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [ItemListComponent]
})
export class SafeModule { }
