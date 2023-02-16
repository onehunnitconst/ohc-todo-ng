import { NgModule } from '@angular/core';
import { CheckboxAtom } from '../atom/checkbox.atom';
import { TextAtom } from '../atom/text.atom';

import { TodoItemMolecule } from './todo-item.molecule';

@NgModule({
  declarations: [CheckboxAtom, TextAtom, TodoItemMolecule],
  exports: [TodoItemMolecule],
})
export class TodoItemModule { }
