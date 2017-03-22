import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()

export class AlunosGuard implements CanActivateChild {

 	canActivateChild(
         route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot
     ): Observable<boolean>|Promise<boolean>|boolean {

        // console.log(route);
        // console.log(state);


          console.log('AlunosGuard gurada de rotas filhas');

         if(state.url.includes('editar')){
              //  alert('usuario sem acesso ');
               // return Observable.of(false);
         }


         return true;
     }

}