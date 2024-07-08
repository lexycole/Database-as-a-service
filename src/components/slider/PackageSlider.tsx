import * as React from 'react';
import { Dispatch } from 'react';
import { darkTheme } from '../theme/Theme';
import { StyledSlider } from './StyledSlider';
import { ThemeProvider } from '@material-ui/core/styles';
import { IOptionData } from '../../view/package/props/PackageDataProps';
import { createTheme } from '@material-ui/core';

type PackageSliderProps = {
  id: string;
  rangeValue: SliderRange;
  options: IOptionData[];
  handleChange: Dispatch<SliderRange>;
};

export function makeDefaultSliderValue(options: IOptionData[]): SliderRange {
  const sliderMax: number = options.length - 1;
  return [0, sliderMax];
}

export type SliderRange = number[];

export function PackageSlider(props: PackageSliderProps) {
  const { options, rangeValue } = props;
  // const [value, setValue] = React.useState<number[]>([20, 37]);

  const sliderMax: number = options.length - 1;

  function valueText(value: number) {
    const option = options[value];
    return option !== undefined ? option.name : ``;
  }

  const handleChange = (event: any, newValue: SliderRange) => {
    const numbers: number[] = newValue as number[];
    props.handleChange(numbers);
  };

  const sliderValue = rangeValue.length
    ? rangeValue
    : makeDefaultSliderValue(options);

  // const handleChange = (event: any, newValue: number | number[]) => {
  //   setValue(newValue as number[]);
  // };

  return (
    <div style={{ marginTop: '1rem' }}>
      <ThemeProvider theme={createTheme(darkTheme)}>
        <StyledSlider
          value={sliderValue}
          id={props.id}
          // @ts-ignore
          onChange={handleChange}
          style={{ width: `80%` }}
          min={0}
          max={sliderMax}
          // defaultValue={makeDefaultSliderValue(options)}
          defaultValue={30}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
          aria-labelledby="range-slider"
        />
      </ThemeProvider>

      <div>
        {sliderValue.map((rangeValue: number, key: number) => (
          <span key={key} style={{ margin: `0 30px` }}>
            {valueText(rangeValue)}
          </span>
        ))}
      </div>
    </div>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// // import Typography from '@material-ui/core/Typography';
// // import Slider from '@material-ui/core/Slider';
// // import { IOptionData } from '@/view/package/props/PackageDataProps';

// const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },
// });

// // function valuetext(value: number) {
// //   return `${value}°C`;
// // }

// // const PackageSlider = (props: PackageSliderProps) => {
// const PackageSlider = () => {
//   const classes = useStyles();
//   // const [value, setValue] = React.useState<number[]>([20, 37]);

//   // const handleChange = (event: any, newValue: number | number[]) => {
//   //   setValue(newValue as number[]);
//   // };

//   return (
//     <div className={classes.root}>
//       package slider
//       {/* <Typography id="range-slider" gutterBottom>
//         Temperature range
//       </Typography>
//       <Slider
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         aria-labelledby="range-slider"
//         getAriaValueText={valuetext}
//       /> */}
//     </div>
//   );
// }

// export default PackageSlider;
