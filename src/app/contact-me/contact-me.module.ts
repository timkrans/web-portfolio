import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactMeRoutingModule } from './contact-me-routing.module';
import { ContactMeComponent } from './contact-me.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    ContactMeRoutingModule,
    FormsModule
  ]
})
export class ContactMeModule { }
