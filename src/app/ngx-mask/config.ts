import { InjectionToken } from '@angular/core';

export interface IConfig {
  clearIfNotMatch: boolean;
  dropSpecialCharacters: boolean;
  specialCharacters: string[];
  patterns: {
    [character: string]: {
      pattern: RegExp,
      optional?: boolean
    }
  };
}

export const config: InjectionToken<string> = new InjectionToken('config');

export const initialConfig: IConfig = {
  clearIfNotMatch: false,
  dropSpecialCharacters: true,
  specialCharacters: ['/', '(', ')', '.', ':', '-', ' ', '+'],
  patterns: {
    '0': {
      pattern: new RegExp('\\d'),
    },
    '9': {
      pattern: new RegExp('\\d'),
      optional: true
    },
    'A': {
      pattern: new RegExp('\[a-zA-Z0-9\]')
    },
    'S': {
      pattern: new RegExp('\[a-zA-Z\]')
    }
  }
};