import { Component, ViewChild, ViewChildren } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatBadgeHarness} from '@angular/material/badge/testing';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    tap((matches)=>{console.log(matches)}),
    map(({ matches }) => {
      console.log(Breakpoints.Handset);
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );


  selectionado?: MatBadge ;
    @ViewChild(MatBadge)
    set pane(v:  MatBadge) {
        this.selectionado=v;
        console.log(v.description);

    }

  constructor(private breakpointObserver: BreakpointObserver) {

  }
  focus(){
    console.log('focus');
  }
}
