import { Component, Input } from '@angular/core';
import { Typography } from '../../common/typography';

@Component({
  selector: 'text-atom',
  template: `
    <p
      [style.font-size.px]="typography.fontSize"
      [style.font-weight]="typography.fontWeight"
      [style.letter-spacing.px]="typography.letterSpacing"
      [style.font-family]="typography.fontFamily">
      {{ text }}
    </p>
  `,
})
export class TextComponent {
  @Input() text: string = '';
  @Input() typoName: string = 'body1';

  typography: Typography = Typography.body1;

  ngOnInit() {
    this.typography = Typography.getTypography(this.typoName);
  }
}
