import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//componentes
import { AppComponent } from './app.component';
import { CabeceraComponent } from 'src/app/componentes/cabecera/cabecera.component';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { ContenidoComponent } from 'src/app/componentes/contenido/contenido.component';
import { ModeloComponent } from 'src/app/componentes/modelo/modelo.component';
import { BuscadorComponent } from 'src/app/componentes/buscador/buscador.component';
import { CalcularComponent } from 'src/app/componentes/calcular/calcular.component';
import { NotfoundComponent } from 'src/app/componentes/notfound/notfound.component'
// servicios http
import { ServidorService } from './servicios/servidor.service'
import { ServidoresService } from './servicios/servidores.service'
import { HttpClientModule } from '@angular/common/http';
//routing
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
//pagination
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    ContenidoComponent,
    ModeloComponent,
    BuscadorComponent,
    CalcularComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: ContenidoComponent },
      { path: 'contenido', component: ContenidoComponent },
      { path: 'modelo', component: ModeloComponent },
      { path: 'buscador', component: BuscadorComponent },
      { path: 'calcular', component: CalcularComponent },
      { path: '**', component: NotfoundComponent }
    ])
    // AppRoutingModule
  ],
  providers: [ServidorService, ServidoresService,{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
