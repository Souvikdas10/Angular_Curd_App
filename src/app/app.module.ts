import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewItemComponent } from './Components/view-item/view-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './Components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewItemComponent,
    AddItemComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
