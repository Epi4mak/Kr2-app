import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";

export class AboutGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return confirm("Перейти?");
    }

}