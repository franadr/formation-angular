import { MockHeroService } from './mockHero.service';
import { HeroService } from './hero.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { ImageService } from './image.service';
import { FightService } from './fight.service';
import {AuthenticationService} from './authentication.service';


@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    AuthenticationService,
    ImageService,
    FightService,
    {provide: HeroService, useClass: HeroService},

  ]
})
export class CoreModule { }
