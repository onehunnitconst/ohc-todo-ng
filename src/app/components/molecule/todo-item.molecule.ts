import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-item-molecule',
  styles: [
    `
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    `
  ],
  template: `
    <div>
      <checkbox-atom (clickEvent)='check()' [style.padding-right.px]="5"/>
      <text-atom
        [text]="contents"
        typoName="body2"
        [style.text-decoration]="setTextDecoration()"
        [style.color]="setTextColor()"
      />
    </div>
  `
})

export class TodoItemMolecule {
  isChecked: boolean = false;
  @Input() contents: string = '';

  check() {
    this.isChecked = !this.isChecked;
  }

  setTextDecoration() {
    return this.isChecked ? 'line-through' : 'none';
  }

  setTextColor() {
    return this.isChecked ? 'darkgray' : 'black';
  }
 }