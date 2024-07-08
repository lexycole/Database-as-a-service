import { Button } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { LogoBlock } from './home/LogoBlock';
import { appTheme } from '@/storage/ThemeAtom';
import {
  GRAY_TEXT_COLOR,
  GRAY_TEXT_COLOR_DARK,
  PRIMARY_COLOR,
  PRIMARY_COLOR_DARK,
} from '@/../styles/BaseStyle';
import { useRouter } from 'next/router';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { getHomeUrl } from '@/components/link/HomeLink';
import getLang from '@/lang/Lang';

function PageNotFound() {
  const router = useRouter();
  const [theme] = useRecoilState(appTheme);

  return (
    <div className="min-h-[70vh]">
      <div className="min-h-[55vh] w-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="scale-75">
            <LogoBlock color={theme ? '0f0e0b' : '#fff'} />
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-[700]">
              {getLang('pageNotFound', 'headerTitle')}
            </h1>
            <h2 className="mt-2 text-5xl font-[900]">
              {getLang('pageNotFound', 'title')}
            </h2>
            <p
              className="mt-3 text-xl"
              style={{ color: theme ? GRAY_TEXT_COLOR : GRAY_TEXT_COLOR_DARK }}
            >
              {getLang('pageNotFound', 'description')}
            </p>
            <div className="mt-10">
              <Button
                onClick={() => {
                  router.push(getHomeUrl());
                }}
                size="large"
                style={{
                  fontSize: '1.2rem',
                  color: theme ? PRIMARY_COLOR_DARK : PRIMARY_COLOR,
                }}
              >
                {getLang('pageNotFound', 'button')}
                <ArrowForwardIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
