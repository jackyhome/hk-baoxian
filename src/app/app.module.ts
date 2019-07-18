import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { ProductContactComponent } from './product-contact/product-contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactComponent } from './contact/contact.component';
import { LeftNavigatorComponent } from './left-navigator/left-navigator.component';
import { CreateMandateComponent } from './mandate/create-mandate/create-mandate.component';
import { SearchMandateComponent } from './mandate/search-mandate/search-mandate.component';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './common/utility/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductTileComponent,
    ProductContactComponent,
    ContactFormComponent,
    ContactComponent,
    LeftNavigatorComponent,
    CreateMandateComponent,
    SearchMandateComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    FieldsetModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    CommonModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
