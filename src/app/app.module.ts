import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Import AnimationModule */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,  
  } from '@angular/material';

import { AppComponent } from './app.component';
/**** Import module books ****/
import { BooksModule } from './books/books.module';
/* import index component*/
import { IndexComponent as componentBooksIndex } from './books/index/index.component';

/* Import component menu */
import { MenuComponent } from './menu/menu.component';

import { CurrentOptionComponent } from './current-option/current-option.component'

/* Import module themes*/
import { ThemesModule } from './themes/themes.module';
/* import index component*/
import { IndexComponent as componentThemesIndex } from './themes/index/index.component';

/* Rutas */
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'books/index', component: componentBooksIndex },
  { path: 'themes/index', component: componentThemesIndex },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule, /* Modules Material Design*/
    BooksModule,
    ThemesModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
