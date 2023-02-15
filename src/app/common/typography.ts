export class Typography {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;

  constructor(
    fontFamily: string,
    fontSize: number,
    fontWeight: number,
    letterSpacing: number,
  ) {
    this.fontFamily = fontFamily;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
    this.letterSpacing = letterSpacing;
  }

  static headline1: Typography = {
    fontFamily: 'Roboto',
    fontSize: 96,
    fontWeight: 300,
    letterSpacing: -1.5
  };

  static headline2: Typography = {
    fontFamily: 'Roboto',
    fontSize: 60,
    fontWeight: 300,
    letterSpacing: -0.5
  };

  static headline3: Typography = {
    fontFamily: 'Roboto',
    fontSize: 48,
    fontWeight: 400,
    letterSpacing: 0
  };

  static headline4: Typography = {
    fontFamily: 'Roboto',
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: 0.25
  };

  static headline5: Typography = {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 400,
    letterSpacing: 0
  };

  static headline6: Typography = {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 0.15
  };

  static subtitle1: Typography = {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.15
  };

  static subtitle2: Typography = {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.1
  };

  static body1: Typography = {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.5
  };

  static body2: Typography = {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.25
  };

  static button: Typography = {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1.25
  };

  static caption: Typography = {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0.4
  };

  static overline: Typography = {
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: 400,
    letterSpacing: 1.5
  };

  static getTypography(typoName: string) {
    switch (typoName) {
      case 'headline1':
        return Typography.headline1;
      case 'headline2':
        return Typography.headline2;
      case 'headline3':
        return Typography.headline3;
      case 'headline4':
        return Typography.headline4;
      case 'headline5':
        return Typography.headline5;
      case 'headline6':
        return Typography.headline6;
      case 'subtitle1':
        return Typography.subtitle1;
      case 'subtitle2':
        return Typography.subtitle2;
      case 'body1':
      default:
        return Typography.body1;
      case 'body2':
        return Typography.body2;
      case 'button':
        return Typography.button;
      case 'caption':
        return Typography.caption;
      case 'overline':
        return Typography.overline;
    }
  }
}