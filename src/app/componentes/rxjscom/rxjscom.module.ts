import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjscomComponent } from './rxjscom.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: RxjscomComponent },

];

@NgModule({
  declarations: [RxjscomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RxjscomComponent]
})
export class RxjscomModule { }
