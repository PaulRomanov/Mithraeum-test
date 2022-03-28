import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from 'src/app/services/auth.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {

    const isAuth: boolean = this.auth.isAuthLogin;
    if (!isAuth) {
      this.router.navigate(['']);
    }
    return isAuth

  }

}
