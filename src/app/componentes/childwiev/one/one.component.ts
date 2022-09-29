import { AfterContentInit, AfterViewInit } from '@angular/core';
import {
  Component,

  ContentChild,

  ContentChildren,

  ElementRef,

  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit,AfterContentInit {

  @ContentChild('i1')
  cardHeaderData: ElementRef = {
    nativeElement: undefined
  };
  constructor() { }


  ngAfterContentInit() {
    this.cardHeaderData.nativeElement.style.color = 'blue';
    this.cardHeaderData.nativeElement.style.backgroundColor =
'yellow';
    this.cardHeaderData.nativeElement.style.fontSize = '24px';
  }


  ngOnInit(): void {
  }

}
