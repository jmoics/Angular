import { Component, OnInit } from '@angular/core';
import { Login } from "./Login";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    login = new Login();
    valid = true;

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit() { }

}
