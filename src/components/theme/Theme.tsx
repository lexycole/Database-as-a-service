import { Localization } from '@material-ui/core/locale';
import { createTheme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core';
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  PRIMARY_COLOR,
  PRIMARY_COLOR_DARK,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_COLOR_DARK,
  SECONDARY_COLOR,
  SECONDARY_COLOR_DARK,
  SECONDARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR_DARK,
  TOOLTIP_BACKGROUND_COLOR,
  TOOLTIP_BACKGROUND_COLOR_DARK,
  TOOLTIP_COLOR,
  TOOLTIP_COLOR_DARK,
} from '../../../styles/BaseStyle';

export const whiteTheme: ThemeOptions = {
  palette: {
    background: {
      default: BACKGROUND_COLOR,
    },
    primary: {
      main: PRIMARY_COLOR,
      contrastText: PRIMARY_TEXT_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
      contrastText: SECONDARY_TEXT_COLOR,
    },
  },
  typography: {
    fontFamily: 'Open Sans, Roboto, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {},
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: TOOLTIP_BACKGROUND_COLOR,
        color: TOOLTIP_COLOR,
        borderRadius: 3,
        fontSize: `13px`,
        padding: '6px 10px',
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: `rgb(232, 241, 250)`,
        '&:hover': {
          backgroundColor: `rgb(250, 232, 241)`,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: `rgb(232, 241, 250)`,
          },
        },
        '&.Mui-focused': {
          backgroundColor: `rgb(250, 241, 232)`,
        },
      },
    },
  },
} as ThemeOptions;

export const darkTheme: ThemeOptions = {
  palette: {
    type: 'dark',
    background: {
      default: BACKGROUND_COLOR_DARK,
    },
    primary: {
      main: PRIMARY_COLOR_DARK,
      contrastText: PRIMARY_TEXT_COLOR_DARK,
    },
    secondary: {
      main: SECONDARY_COLOR_DARK,
      contrastText: SECONDARY_TEXT_COLOR_DARK,
    },
  },
  typography: {
    fontFamily: 'Open Sans, Roboto, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {},
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: TOOLTIP_BACKGROUND_COLOR_DARK,
        color: TOOLTIP_COLOR_DARK,
        borderRadius: 3,
        fontSize: `13px`,
        padding: '6px 10px',
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: `rgb(232, 241, 250)`,
        '&:hover': {
          backgroundColor: `rgb(250, 232, 241)`,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: `rgb(232, 241, 250)`,
          },
        },
        '&.Mui-focused': {
          backgroundColor: `rgb(250, 241, 232)`,
        },
      },
    },
  },
} as ThemeOptions;

export const getTheme = (locale: Localization, themeType: any = false) => {
  const theme = themeType ? whiteTheme : darkTheme;
  return createTheme(theme, locale);
};
