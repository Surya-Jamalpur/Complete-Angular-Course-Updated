import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.scss']
})
export class HeaderComponent {
   @Output() navigated = new EventEmitter<string>();
    constructor(private authService:AuthService){}
    isLoggedIn:boolean = false;
    onNavigate(selectedRoute:string) {
        this.navigated.emit(selectedRoute);
    }
    login() {
        this.authService.onLogin();
        this.isLoggedIn = this.authService.loggedIn;
    }
    logout() {
        this.authService.onLogout();
        this.isLoggedIn = this.authService.loggedIn;

    }
    
}