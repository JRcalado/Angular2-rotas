import { CanActivate, Router,CanLoad,Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './../login/auth.service';



@Injectable()

export class AuthGuard  implements CanActivate, CanLoad {

  constructor(
     private authService: AuthService,
     private router: Router


  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    console.log('AuthGuard');

    
    return this.verificarAcesso();
    
  }


  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad verificando se o usuario pode carregar module');
     return this.verificarAcesso();
    
    }


    private verificarAcesso(){

      if(this.authService.usuarioEstaAutenticado()){

      return true;

    }

    this.router.navigate(['/login']);

      return false;
    }

}
