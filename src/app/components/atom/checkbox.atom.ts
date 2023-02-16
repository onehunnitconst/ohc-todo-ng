import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'checkbox-atom',
  template: `
    <input type='checkbox' (click)='onCheck()' [style.width.px]="size" [style.height.px]="size">
  `,
})
export class CheckboxAtom {
  isChecked: boolean = false;
  @Input() size: number = 18;
  @Output() clickEvent = new EventEmitter<void>();

  onCheck() {
    this.clickEvent.emit();
  }
}
