import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()

export class CursosGuard implements CanActivateChild {

 	canActivateChild(
         route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot
     ): Observable<boolean>|Promise<boolean>|boolean {

         console.log('guarda de rotas filhas');
         return true;
     }

}