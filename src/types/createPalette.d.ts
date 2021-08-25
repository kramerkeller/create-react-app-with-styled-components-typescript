import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    export interface PaletteOptions extends PaletteOptions {    
      neutral?: PaletteColorOptions;
    }

    export interface Palette extends Palette {
      neutral: PaletteColor;
    }
}

declare module '@material-ui/core/Button' {
  export interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}