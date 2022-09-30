import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pagina1Component } from './componentes/pages/pagina1/pagina1.component';
import { GridComponent } from './componentes/grid/grid.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { Apollop1Component } from './componentes/apollop1/apollop1.component';
import { OneComponent } from './componentes/childwiev/one/one.component';
import { TwoComponent } from './componentes/childwiev/two/two.component';

const routes: Routes = [
     { path: '', component: DashboardComponent },
     { path: 'pagina1', component: Pagina1Component },
     { path: 'formulario/:id1/:id2',  component: FormularioComponent },
     { path: 'grid', component: GridComponent },
     { path: 'apollo', component: Apollop1Component },
     { path: 'one', component: TwoComponent },
     {
      path: 'rxjs',
      loadChildren: () => import('./componentes/rxjscom/rxjscom.module').then(m => m.RxjscomModule)
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
