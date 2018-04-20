import {ImageService} from '../../../core/image.service';
import {HeroService} from '../../../core/hero.service';
import {Component, OnChanges, OnInit} from '@angular/core';
import {Superhero} from '../../../models/superhero';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class HeroListComponent implements OnInit,OnChanges{
  title = 'Angular Formation 2018';
  name = 'adriano';
  isVisible = true;
  hideLabel = 'hide';
  heroes = [];
  imageSource: string;
  searchText: string;
  selectedIdHero: number;

  constructor(private hs: HeroService, private is: ImageService) {

  }

  ngOnInit(): void {
    this.hs.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  ngOnChanges(): void {
    this.hs.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  showDetail(idHero: number) {

    this.selectedIdHero = idHero;
  }

  filter(): string {

    return '';
  }
  getTime(): string {
    return new Date().toLocaleString();
  }
  toUpper(): void {
    this.name =  this.name.toUpperCase();
  }
  hide(): void {
    this.isVisible = !this.isVisible;
  }

  getImagesrc(imageURL: string) {
    return this.is.getImageUrl(imageURL);
  }
}
