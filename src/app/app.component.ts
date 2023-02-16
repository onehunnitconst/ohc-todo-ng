import { Component } from '@angular/core';
import { Typography } from './common/typography';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: string[] = ['밥 먹기', '손 씻기', '출근하기', '어쩌구', '저쩌구']
}
