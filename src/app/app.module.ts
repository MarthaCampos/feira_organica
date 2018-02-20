import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { AnunciarComponent } from './anunciar/anunciar.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { NovidadesComponent } from './novidades/novidades.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutosComponent } from './produtos/produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    LoginComponent,
    PesquisarComponent,
    AnunciarComponent,
    DestaquesComponent,
    NovidadesComponent,
    FooterComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
