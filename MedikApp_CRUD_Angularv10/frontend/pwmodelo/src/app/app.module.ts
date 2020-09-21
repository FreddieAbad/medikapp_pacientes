import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//componentes
import { AppComponent } from './app.component';
import { CabeceraComponent } from 'src/app/componentes/cabecera/cabecera.component';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { ModeloComponent } from 'src/app/componentes/modelo/modelo.component';
import { BuscadorComponent } from 'src/app/componentes/buscador/buscador.component';
import { NotfoundComponent } from 'src/app/componentes/notfound/notfound.component'
// servicios http
import { HttpClientModule } from '@angular/common/http';
//routing
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
//pagination
import {NgxPaginationModule} from 'ngx-pagination';
//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    ModeloComponent,
    BuscadorComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: ModeloComponent },
      { path: 'modelo', component: ModeloComponent },
      { path: 'buscador', component: BuscadorComponent },
      { path: '**', component: NotfoundComponent }
    ]),
    FormsModule,
    ReactiveFormsModule
    // AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
