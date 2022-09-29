import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ValidacionesPropias {
    static multiplo5(control: AbstractControl): ValidationErrors| null {
        let nro = parseInt(control.value);
        if (nro % 5 == 0)
            return null;
        else
            return { multiplo5: true }
    }
    static soniguales: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
      const pruebaInput = control.get('pruebaInput');
      const pruebaInput2 = control.get('pruebaInput2');

      return pruebaInput?.value !== pruebaInput2?.value ? { soniguales: true } : null;
    };
}
