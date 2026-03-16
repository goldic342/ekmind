import chroma from 'chroma-js';
import { palette } from './palette';

interface IScaleMood {
  background: string;
  text: string;
  textSecondary: string;
}

export interface IScale {
  extremely_good: IScaleMood;
  very_good: IScaleMood;
  good: IScaleMood;
  neutral: IScaleMood;
  bad: IScaleMood;
  very_bad: IScaleMood;
  extremely_bad: IScaleMood;
  empty: { background: string; border: string; text: string; };
}

export type IScaleColors = {
  [key: string]: IScale;
};

const getScaleMood = (color: string): IScaleMood => {
  return {
    background: color,
    text: chroma(color).luminance() > 0.45 ? chroma(color).darken(4).hex() : chroma(color).brighten(2.5).hex(),
    textSecondary: chroma(color).luminance() > 0.45 ? chroma(color).darken(2.5).hex() : chroma(color).brighten(4).hex(),
  };
}

const getScale = (scale: string[]): IScale => {
  const [extremely_good, very_good, good, neutral, bad, very_bad, extremely_bad, empty] = scale;

  return {
    extremely_good: getScaleMood(extremely_good),
    very_good: getScaleMood(very_good),
    good: getScaleMood(good),
    neutral: getScaleMood(neutral),
    bad: getScaleMood(bad),
    very_bad: getScaleMood(very_bad),
    extremely_bad: getScaleMood(extremely_bad),
    empty: {
      background: empty,
      border: chroma(empty).luminance() > 0.5 ? chroma(empty).darken(0.5).hex() : chroma(empty).brighten(1.5).hex(),
      text: chroma(empty).luminance() > 0.5 ? chroma(empty).darken(3).hex() : chroma(empty).brighten(4).hex(),
    },
  };
}

const light: IScaleColors = {
  'ColorBrew-RdYlGn': getScale([
    palette.emerald[600],
    palette.emerald[400],
    palette.emerald[200],
    palette.neutral[200],
    palette.orange[100],
    palette.orange[300],
    palette.red[500],
    palette.neutral[100],
  ]),
  'ColorBrew-RdYlGn-old': getScale(['#006837',
    '#1a9850',
    '#91cf60',
    '#ffffbf',
    '#fee08b',
    '#fc8d59',
    '#d73027',
    palette.neutral[100],
  ]),
  'ColorBrew-PuOr': getScale([
    '#542788',
    '#998ec3',
    '#d8daeb',
    palette.neutral[200],
    '#fee0b6',
    '#f1a340',
    '#b35806',
    palette.neutral[100],
  ]),
  'ColorBrew-BrBG': getScale([
    '#01665e',
    '#5ab4ac',
    '#c7eae5',
    palette.neutral[200],
    '#f6e8c3',
    '#d8b365',
    '#8c510a',
    palette.neutral[100],
  ]),
  'ColorBrew-RdYG': getScale([
    '#4d9221',
    '#a1d76a',
    '#e6f5d0',
    palette.neutral[200],
    '#fddbc7',
    '#ef8a62',
    '#b2182b',
    palette.neutral[100],
  ])
};

const dark: IScaleColors = {
  'ColorBrew-RdYlGn': getScale([
    palette.emerald[600],
    palette.emerald[400],
    palette.emerald[200],
    palette.neutral[100],
    palette.orange[100],
    palette.orange[300],
    palette.red[500],
    palette.neutral[800],
  ]),
  'ColorBrew-RdYlGn-old': getScale(['#006837',
    '#1a9850',
    '#91cf60',
    '#ffffbf',
    '#fee08b',
    '#fc8d59',
    '#d73027',
    palette.neutral[800],
  ]),
  'ColorBrew-PuOr': getScale([
    '#542788',
    '#998ec3',
    '#d8daeb',
    palette.neutral[200],
    '#fee0b6',
    '#f1a340',
    '#b35806',
    palette.neutral[800],
  ]),
  'ColorBrew-BrBG': getScale([
    '#01665e',
    '#5ab4ac',
    '#c7eae5',
    palette.neutral[200],
    '#f6e8c3',
    '#d8b365',
    '#8c510a',
    palette.neutral[800],
  ]),
  'ColorBrew-RdYG': getScale([
    '#4d9221',
    '#a1d76a',
    '#e6f5d0',
    palette.neutral[200],
    '#fddbc7',
    '#ef8a62',
    '#b2182b',
    palette.neutral[800],
  ])
};

export const scales = {
  dark,
  light,
};

export default scales;