import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {HeroService} from '../../../core/hero.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-superhero-form',
  templateUrl: './superhero-form.component.html',
  styleUrls: ['./superhero-form.component.css']
})

export class SuperheroFormComponent {
  heroInformation: any = {};
  heroForm: FormGroup;
  heroFormFields = [
    { name: 'heroName', label: 'Hero name', type: 'text', placeholder: 'Iron Man' },
    { name: 'intelligence', label: 'Intelligence', type: 'number' },
    { name: 'strength', label: 'Strength', type: 'number'},
    { name: 'speed', label: 'Speed', type: 'number'},
    { name: 'durability', label: 'Durability', type: 'number'},
    { name: 'power', label: 'Power', type: 'number'},
    { name: 'combat', label: 'Combat', type: 'number'},
  ];

  constructor(public dialogRef: MatDialogRef<SuperheroFormComponent>,
              private _heroService: HeroService,
              private _formBuilder: FormBuilder
    ) {
    this.heroForm = this._formBuilder.group({
      heroName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  handleForm(): void {
    if (this.heroForm.valid) {
      this._heroService.addHero(this.heroForm.value).subscribe(() => {
        this.dialogRef.close(this.heroInformation);
      }, (error) => {
        console.log(error);
      });
    }
  }
  cancel(): void {
    this.dialogRef.close();
  }


}
