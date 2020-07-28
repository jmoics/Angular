import { enableProdMode } from '@angular/core'; // Importa enableProdMode desde el módulo central
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Importar la clase platformBrowserDynamic que se utiliza para compilar la aplicación en función del navegador.

import { AppModule } from './app/app.module'; // Importar AppModule, que es el módulo raíz para arrancar.
import { environment } from './environments/environment'; // Importa el entorno que se utiliza para verificar si el tipo de entorno es de producción o desarrollo.

if (environment.production) { // Verifica si estamos trabajando en un entorno de producción o no
  enableProdMode(); // enableProdMode () habilitará el modo de producción que ejecutará la aplicación más rápido
}

platformBrowserDynamic().bootstrapModule(AppModule) // el método bootstrapModule () acepta el nombre del módulo raíz como un parámetro que cargará el módulo dado, es decir, AppModule después de la compilación.
  .catch(err => console.error(err));
