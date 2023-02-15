import { Component } from '@angular/core';
import { Typography } from './common/typography';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick(e: boolean) {
    alert('안녕!');
  }

  getTypography(typo: Typography) {
    return typo;
  }
}
