import { NgModule } from '@angular/core'; // Importa la clase NgModule para definir metadatos del módulo.
import { BrowserModule } from '@angular/platform-browser'; // Importa la clase BrowserModule que se necesita para ejecutar la aplicación dentro del navegador.
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'; // Importa la clase AppComponent del archivo app.component.ts. No es necesario mencionar la extensión .ts ya que Angular por defecto considera el archivo como un archivo .ts
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
// import {ProductsModule} from './products/products.module'

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule], // La propiedad imports deben contener todas las clases de módulos que se utilizarán en la aplicación.
    declarations: [AppComponent, WelcomeComponent, LoginComponent], // La propiedad de declarations debe contener todos los componentes definidos por el usuario, directivas, clases pipes que se utilizarán en la aplicación. Hemos agregado nuestra clase AppComponent aquí.
    providers: [], // La propiedad providers debe contener todas las clases de servicio.
    bootstrap: [AppComponent] // la declaración bootstrap debe contener el componente raíz para cargar. En este ejemplo, AppComponent es el componente raíz que se cargará en la página HTML
})
export class AppModule { }
