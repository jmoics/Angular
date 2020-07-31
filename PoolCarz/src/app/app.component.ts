import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    pageTitle = 'PoolCarz';
    loginTitle = 'Login';
    userName: string;

    constructor(private _router: Router) {}

    login() {
        const value = document.getElementById('login').innerHTML;
        if (value === 'Login') {
            this._router.navigate(['/login']);
        }
    }
}
