import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PetService } from './services/pet.service'
import { HttpClientModule } from '@angular/common/http' 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetCreateComponent } from './components/pet/pet-create/pet-create.component';
import { PetSearchComponent } from './components/pet/pet-search/pet-search.component';
import { PetUpdateComponent } from './components/pet/pet-update/pet-update.component';
import { HousingsScreenComponent } from './components/housing/housings-screen/housings-screen.component';
import { PetOwnerCreateComponent } from './components/petOwner/pet-owner-create/pet-owner-create.component'
@NgModule({
  declarations: [
    AppComponent,
    PetCreateComponent,
    PetSearchComponent,
    PetUpdateComponent,
    HousingsScreenComponent,
    PetOwnerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
