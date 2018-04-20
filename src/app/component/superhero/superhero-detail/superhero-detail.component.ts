import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Superhero} from '../../../models/superhero';
import {HeroService} from '../../../core/hero.service';
import {ImageService} from '../../../core/image.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-superhero-detail',
  templateUrl: './superhero-detail.component.html',
  styleUrls: ['./superhero-detail.component.css'],
})

export class SuperheroDetailComponent implements OnChanges {

  @Input() idHero: number;
  @Output() close: EventEmitter<Superhero> = new EventEmitter<Superhero>();
  heroDetail: Superhero;
  constructor(private _heroService: HeroService, private _imageService: ImageService,private _route:ActivatedRoute) {
    this._heroService.getHero(this._route.snapshot.params['id'])
      .subscribe((hero) => this.heroDetail = hero,(err) => console.error('Could not retrieve details'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._heroService.getHero(this.idHero).subscribe((hero) => this.heroDetail = hero,(err) => console.error('Could not retrieve details'));
  }

  getImagesrc(imageURL: string) {
    return this._imageService.getImageUrl(imageURL);
  }
  closeDetail(): void {
    this.close.emit(this.heroDetail);
  }
}

