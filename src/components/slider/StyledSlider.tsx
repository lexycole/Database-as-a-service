import { Slider, withStyles } from '@material-ui/core';

export const StyledSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  mark: {
    height: 16,
    width: 16,
    marginTop: -6,
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: '3px solid #666',
    transition: 'all 3s ease-in-out',
  },
  active: {
    border: '3px solid #12823f',
  },
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
