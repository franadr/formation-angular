import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';


@Directive({
  selector : '[appHighLight]',
})

export class HighLightDirective implements OnChanges{
  @Input() selectedHero: number;
  @Input() superHero: number;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) {}
  ngOnChanges() {
    if (this.selectedHero === this.superHero) {
      this._el.nativeElement.style.border = '10px solid yellow';
    } else {
      this._el.nativeElement.style.border = 'white';
    }
  }



}
