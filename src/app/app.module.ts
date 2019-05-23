import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { BoucleComponent } from './boucle/boucle.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    FormulaireComponent,
    BoucleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
