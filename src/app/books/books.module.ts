import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, NewComponent, ShowComponent]
})
export class BooksModule { }
