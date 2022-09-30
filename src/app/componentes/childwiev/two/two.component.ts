import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { ValidacionesPropias } from '../../../validadores/validadoresp';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  pruebaForm: FormGroup;
  constructor(private fb:FormBuilder) {
  /*   this.pruebaForm = new FormGroup({
      pruebaInput: new FormControl('Chao',  [Validators.required]),
      pruebaInput2: new FormControl('rafaelchardi@gmail.com',[Validators.required,ValidacionesPropias.multiplo5],
                                        [ValidacionesPropias.emailValidator()]),
    }, { validators: ValidacionesPropias.soniguales });
   } */

   this.pruebaForm = new FormGroup({
    pruebaInput: new FormControl('Chao',  [Validators.required]),
    pruebaInput2: new FormControl('rafaelchardi@gmail.com',[Validators.required],[ValidacionesPropias.emailValidator()])
   });

  this.pruebaForm = this.fb.group({
    pruebaInput : ['chao',
         {
          nonNullable: true,
         }
      ],
      pruebaInput2 : ['chao',
      { validators: [Validators.required,Validators.minLength(2)],
        asyncValidators : [ValidacionesPropias.emailValidator()],
        updateOn: 'blur',
        nonNullable: true,
      }
    ]
  });
 }


  ngOnInit(): void {
    this.pruebaForm.get('pruebaInput')?.setValue('esto es no se ');
    this.pruebaForm.get('pruebaInput')?.valueChanges.subscribe(x=>console.log(x));
  }

  cli(){
    this.pruebaForm.get('pruebaInput')?.reset();
    console.log(this.pruebaForm.get('pruebaInput')?.value)
  }
}
