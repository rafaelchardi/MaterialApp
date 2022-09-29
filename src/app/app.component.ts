import { AfterViewInit, Component, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

 title = 'MaterialApp';


 pep( valor:any){

  alert(valor);
 }

}
