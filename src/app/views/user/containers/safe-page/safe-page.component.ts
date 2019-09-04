import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Safe, SafeItem } from '~core/model';
import { SafeService } from '~core/services';

@Component({
  selector: 'cool-safe-page',
  templateUrl: './safe-page.component.html',
  styleUrls: ['./safe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafePageComponent implements OnInit {

  safeId$: Observable<string>;
  safe$: Observable<Safe>;
  items$: Observable<SafeItem[]>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private safeService: SafeService) { }

  ngOnInit() {

    this.safeId$ = this.activatedRoute.paramMap.
      pipe(
        map((paramMap: ParamMap) =>
          paramMap.get('safeId')));

    this.safe$ = this.safeId$.pipe(
      switchMap((safeId: string) => this.safeService.getSafe(safeId))
    );
    this.items$ = this.safeId$.pipe(
      switchMap((safeId: string) => this.safeService.getItems(safeId))
    );

  }

}
