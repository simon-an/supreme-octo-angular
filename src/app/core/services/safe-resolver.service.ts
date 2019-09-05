import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Safe } from '~core/model';
import { Observable, of, EMPTY } from 'rxjs';
import { switchMap, take, tap, mergeMap } from 'rxjs/operators';
import { SafeService } from './safe.service';

@Injectable({
  providedIn: 'root'
})
export class SafeResolverService implements Resolve<Safe> {
  constructor(private safeService: SafeService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Safe | Observable<Safe> | Promise<Safe> {
    const safeId: string = route.paramMap.get('safeId');
    return this.safeService.getSafe(safeId).pipe(
      tap(console.log),
      take(1),
      mergeMap((safe: Safe) => {
        if (safe) {
          return of(safe);
        } else {
          // id not found
          this.router.navigate(['/home']);
          return EMPTY;
        }
      })
    );
    // return of(safeId).pipe(
    //   switchMap((id: string) => this.safeService.getSafe(id))
    // );

  }

}
