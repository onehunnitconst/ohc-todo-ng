import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxAtom } from './components/atom/checkbox.atom';
import { TextAtom } from './components/atom/text.atom';
import { TodoItemModule } from './components/molecule/todo-item.module';
import { TodoItemMolecule } from './components/molecule/todo-item.molecule';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TodoItemModule,
    ]
})
export class AppModule { }
