import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidacionesPropias } from '../../../validadores/validadoresp';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  pruebaForm: FormGroup;
  constructor() {
    this.pruebaForm = new FormGroup({
      pruebaInput: new FormControl('Chao',  [Validators.required]),
      pruebaInput2: new FormControl('5',[Validators.required,ValidacionesPropias.multiplo5]),
    }, { validators: ValidacionesPropias.soniguales });
   }

  ngOnInit(): void {

    this.pruebaForm.get('pruebaInput')?.setValue('esto es no se ');
    this.pruebaForm.get('pruebaInput')?.valueChanges.subscribe(x=>console.log(x));
  }

}
