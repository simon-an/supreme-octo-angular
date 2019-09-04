import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SafeItem } from '~core/model';

@Component({
  selector: 'cool-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {

  @Input()
  items: SafeItem[];

  constructor() { }

  ngOnInit() {
  }

}
