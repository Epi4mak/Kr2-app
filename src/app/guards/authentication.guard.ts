import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private authenticationServive: AuthenticationService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        if (!this.authenticationServive.isUserLogged()) {

            this.router.navigate(["login"], {queryParams: {
                msg: "У вас нет прав для перехода. Необходимо: войти",
                returnUrl: route.url
            }});
            return false;
        } else if (!this.authenticationServive.isUserAdmin()) {
            this.router.navigate(["login"], {queryParams: {
                msg: "У вас нет прав для перехода. Необходимо иметь роль администратора",
                returnUrl: route.url
            }});
            return false;
        } else {
            return true;
        }
    }

}