import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { Safe, SafeItem } from '~core/model';
import { SafeService } from '~core/services';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddSafeItemDialogComponent } from '../add-safe-item-dialog/add-safe-item-dialog.component';

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
    private safeService: SafeService,
    private matDialog: MatDialog,
  ) { }

  openDialog() {
    const dialogRef: MatDialogRef<AddSafeItemDialogComponent, SafeItem> =
      this.matDialog.open(
        AddSafeItemDialogComponent,
        {
          height: '400px',
          width: '600px',
          disableClose: true
        } as MatDialogConfig
      );

    dialogRef
      .afterClosed()
      .pipe(
        withLatestFrom(this.safe$),
        switchMap(([result, safe]: [SafeItem, Safe]) => this.safeService.addItem(safe.id, result))
      )
      .subscribe((result: SafeItem) => {
        console.log(`Dialog result: ${result}`);
      }, console.error, () => console.log('completed'));
  }

  ngOnInit() {

    this.safeId$ = this.activatedRoute.paramMap.
      pipe(
        map((paramMap: ParamMap) =>
          paramMap.get('safeId')));

    // this.safe$ = this.safeId$.pipe(
    //   switchMap((safeId: string) => this.safeService.getSafe(safeId))
    // );
    this.safe$ = this.activatedRoute.data.pipe(
      map((data: { safe: Safe }) => {
        return data.safe;
      })
    );

    this.items$ = this.safeId$.pipe(
      switchMap((safeId: string) => this.safeService.getItems(safeId))
    );

  }



}
