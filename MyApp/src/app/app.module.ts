import { BrowserModule } from '@angular/platform-browser'; // Importa la clase BrowserModule que se necesita para ejecutar la aplicación dentro del navegador.
import { NgModule } from '@angular/core'; // Importa la clase NgModule para definir metadatos del módulo.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component'; // Importa la clase AppComponent del archivo app.component.ts. No es necesario mencionar la extensión .ts ya que Angular por defecto considera el archivo como un archivo .ts
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ // La propiedad de declarations debe contener todos los componentes definidos por el usuario, directivas, clases pipes que se utilizarán en la aplicación. Hemos agregado nuestra clase AppComponent aquí.
    AppComponent, HelloComponent, WelcomeComponent, LoginComponent
  ],
  imports: [ // La propiedad imports deben contener todas las clases de módulos que se utilizarán en la aplicación.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // La propiedad providers debe contener todas las clases de servicio.
  bootstrap: [WelcomeComponent] // la declaración bootstrap debe contener el componente raíz para cargar. En este ejemplo, AppComponent es el componente raíz que se cargará en la página HTML
})
export class AppModule { }
