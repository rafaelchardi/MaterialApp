import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {


cols=2;
rows=2;


   /* const Breakpoints: { XSmall: string; Small: string; Medium: string; Large: string; XLarge: string; Handset: string;
                  Tablet: string; Web: string; HandsetPortrait: string; TabletPortrait: string; WebPortrait: string;
                    HandsetLandscape: string; TabletLandscape: string; WebLandscape: string; }; */
  constructor(private breakpointObserver: BreakpointObserver) {

    this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      tap((matches)=>{console.log(matches)}),
      map(({ matches }) => {
        console.log(Breakpoints.Handset);
        if (matches) {
          this.cols=2;
          this.rows=1;
        }
        else {
          this.cols=1;
          this.rows=1;
        }

      })
    ).subscribe();

  }

  ngOnInit(): void {


  }

}
