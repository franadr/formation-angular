import { MaterialModule } from './material.module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { MenubarModule } from './menubar/menubar.module';
import {UnlessDirective} from './directives/unless.directive';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {HighLightDirective} from './directives/highLight.directive';
import {AuthGuardGuard} from './guards/auth-guard.guard';
@NgModule({
  imports: [
    // Angular
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ],
  declarations: [
    UnlessDirective,
    HighLightDirective,
    CapitalizePipe,
    FilterPipe
  ],
  exports: [
    // Angular
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    // Internal
    MenubarModule,
    UnlessDirective,
    HighLightDirective,
    CapitalizePipe,
    FilterPipe,

  ],
  providers: [
    DatePipe,
    AuthGuardGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [],
})
export class SharedModule { }
