import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {HeroListComponent} from './superhero-list/superhero-list.component';
import {SuperheroDetailComponent} from './superhero-detail/superhero-detail.component';
import {SkillTableComponent} from './skill-table/skill-table.component';
import {SuperheroFormComponent} from './superhero-form/superhero-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

  ],
  declarations: [
    HeroListComponent,
    SuperheroDetailComponent,
    SkillTableComponent,
    SuperheroFormComponent
  ],
  entryComponents : [
    SuperheroFormComponent
  ],
  exports : [
    HeroListComponent,
    SuperheroDetailComponent,
    SkillTableComponent
  ]
  ,
})
export class SuperheroModule { }
