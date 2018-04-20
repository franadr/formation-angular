import {Component, Input} from '@angular/core';
import {Superhero} from '../../../models/superhero';

@Component({
  selector: 'app-skill-table',
  templateUrl: './skill-table.component.html',
  styleUrls: ['./skill-table.component.css'],
})

export class SkillTableComponent {
  @Input() hero: Superhero;

}


