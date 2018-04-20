import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {HeroListComponent} from '../../superhero/superhero-list/superhero-list.component';
import {appRoutes} from '../../../app.routing';
import {MaterialModule} from '../../../shared/material.module';
import {SharedModule} from '../../../shared/shared.module';
import {SuperheroModule} from '../../superhero/superhero.module';

@NgModule({
  imports: [
    CommonModule,
    appRoutes,
    MaterialModule,
    SharedModule,
    SuperheroModule
  ],
  declarations: [
    MainComponent,

    ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
