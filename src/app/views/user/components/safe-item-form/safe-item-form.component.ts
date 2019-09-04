import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SafeItem } from '~core/model';

@Component({
  selector: 'cool-safe-item-form',
  templateUrl: './safe-item-form.component.html',
  styleUrls: ['./safe-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafeItemFormComponent implements OnInit {

  model: SafeItem = {} as SafeItem;

  @Output()
  newItemEvent: EventEmitter<SafeItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
