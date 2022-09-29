import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Pagina1Component } from './componentes/pages/pagina1/pagina1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import {MatBadgeModule} from '@angular/material/badge';
import { GridComponent } from './componentes/grid/grid.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

import { ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { Apollop1Component } from './componentes/apollop1/apollop1.component';
import { OneComponent } from './componentes/childwiev/one/one.component';
import { TwoComponent } from './componentes/childwiev/two/two.component';
import { InputControlComponent } from './componentes/myimput/myimput.component';




@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    Pagina1Component,
    DashboardComponent,
    GridComponent,
    FormularioComponent,
    Apollop1Component,
    OneComponent,
    TwoComponent,
    InputControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,MatBadgeModule,ReactiveFormsModule, GraphQLModule, HttpClientModule ,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
