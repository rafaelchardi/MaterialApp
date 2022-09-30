import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { delay, filter, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
///////////////////////////////////////////////////
    static  emailValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
          const email = (control.value as string).trim().toLowerCase();
          const fakeExistingEmails = ['alex@gmail.com', 'alejandro@gmail.com'];
          return of(fakeExistingEmails).pipe(
            tap(x=>console.log(x)),
            delay(2500),
            map((emails: string[]) => emails.includes(email)),
            tap(x=>console.log(x)),
            map(isExisting => (isExisting ? { emailExists: true } : null))
          );

       };
  }
}


