import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario! :FormGroup;
  cols=2;
  rows=1;
  typesOfShoes : string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(private _Activatedroute:ActivatedRoute,
            private breakpointObserver: BreakpointObserver) {

    console.log('---------------------------------') ;
    console.log(this._Activatedroute.snapshot.paramMap) ;
    console.log('---------------------------------') ;

    console.log(this._Activatedroute.snapshot.paramMap.get("id1")) ;
    this._Activatedroute.paramMap.subscribe(params => {
      console.log(params) ;
    });

    console.log('---------------------------------') ;
    this._Activatedroute.queryParams
      .subscribe(params => {
        console.log(params);
      }
    );


      this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        tap((matches)=>{console.log(matches)}),
        map(({ matches }) => {
          console.log(Breakpoints.Handset);
          if (matches) {
            this.cols=2;
          }
          else {
            this.cols=1;
          }

        })
      ).subscribe();




  }
//////////////////////////////
  ngOnInit(): void {

    this.formulario = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      shoeselegido: new FormControl(''),
    });
  }

//////////////////////////////
  onSubmit(){
  console.log(this.formulario.value)

  }

}
