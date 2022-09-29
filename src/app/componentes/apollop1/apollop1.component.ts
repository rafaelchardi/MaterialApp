import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-apollop1',
  templateUrl: './apollop1.component.html',
  styleUrls: ['./apollop1.component.css']
})
export class Apollop1Component implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    this.apollo
    .watchQuery({
      query: gql`
        {
          rates(currency: "EUR") {
            currency
            rate
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      console.log(result);
      /* this.rates = result?.data?.rates;
      this.loading = result.loading;
      this.error = result.error; */
    });
   }
}
