import { Component } from '@angular/core';

@Component({ // Agrega component decorator a la clase que hace que la clase sea un componente.
  selector: 'app-root', // Especifica el tag name que se utilizará en la página HTML para cargar el componente.
  templateUrl: './app.component.html', // Especifica la plantilla o el archivo HTML que se representará cuando el componente se cargue en la página HTML. La plantilla representa la vista que se mostrará
  styleUrls: ['./app.component.css'] // Especifica el archivo de hoja de estilo que contiene los estilos CSS que se aplicarán a la plantilla.
})
export class AppComponent { // Cada componente es una clase (AppComponent) y export se utiliza para que sea accesible en otros componentes.
  title = 'MyApp'; // Crea una propiedad con el título y la inicializa para valorar 'aplicación'.
}
