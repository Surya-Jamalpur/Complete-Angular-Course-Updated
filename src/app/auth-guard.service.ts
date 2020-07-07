import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
           return this.authService.isAuthenticated()
            .then(
                (authValue) => {
                    if(authValue) {
                        return true;
                    } else {
                        alert('You dont have permission..');
                        this.router.navigate(['/'])
                    }
                }
            )
    }
}