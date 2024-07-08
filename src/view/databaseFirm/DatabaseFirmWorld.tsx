import { Box } from '@material-ui/core';
import getLang from '@/lang/Lang';
import {
  SECONDARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR_DARK,
} from '@/../styles/BaseStyle';

export function DatabaseFirmWorld({ theme }: any) {
  return (
    <div className="relative h-[400px] w-[100%]">
      <div
        className="absolute w-full h-full"
        style={{
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -30%)',
          zIndex: 0,
        }}
      >
        {theme ? (
          <img className="w-full h-full" src="/img/home/map-light.svg" alt="" />
        ) : (
          <img
            className="w-[100%] h-full"
            src="/img/home/map-dark.svg"
            alt=""
          />
        )}
      </div>
      <Box
        style={{
          height: 400,
          zIndex: 100,
          position: 'relative',
          color: theme ? SECONDARY_TEXT_COLOR : SECONDARY_TEXT_COLOR_DARK,
        }}
        className="flex-center-column"
      >
        <h3 className="font-[700] text-[1.7rem] m-[10px]">
          {getLang(`databaseFirm`, `fromAllCountries`)}
        </h3>
        <p
          style={{
            fontWeight: 400,
            fontSize: '1.2rem',
            width: '80%',
            margin: '0 auto',
          }}
        >
          {getLang(`databaseFirm`, `fromAllCountriesDescription`)}
        </p>
      </Box>
    </div>
  );
}
