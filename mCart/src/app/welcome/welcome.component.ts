import { Component } from '@angular/core';

@Component({ // @Component para marcar la clase como componente y el componente está vinculado con la plantilla y el archivo CSS utilizando las propiedades templateUrl y styleUrls respectivamente
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle = 'Welcome';

    constructor() {
        document.getElementById('login').style.display = ''; // Esta declaración muestra el botón de inicio de sesión en la esquina superior derecha de la página.
    }
}
