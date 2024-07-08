import getLang from '@/lang/Lang';
import { useRecoilState } from 'recoil';
import { HomeTitle } from './style/HomeStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { FirmCountBlock } from './FirmCountBlock';
import { TopPageWrapper } from './TopPageWrapper';
import { CategoryContainer } from '@/components/category/CategoryContainer';
import { MainSearchHomePage } from '@/components/search/MainSearchHomePage';

export function HomeWrapper() {
  const [theme] = useRecoilState(appTheme);

  return (
    <div>
      <FirmCountBlock />
      <div style={{ position: 'relative' }}>
        <div
          style={{
            zIndex: 0,
            top: '50%',
            left: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -25%)',
          }}
        >
          {theme ? (
            <img src="/img/home/map-dark.svg" alt="" />
          ) : (
            <img src="/img/home/map-light.svg" alt="" />
          )}
        </div>
        <div
          style={{
            position: 'relative',
            zIndex: 100,
            margin: '.8rem auto 6rem auto',
          }}
        >
          <TopPageWrapper />
        </div>
        <MainSearchHomePage homePageSearch />
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <HomeTitle>{getLang(`search`, `searchTitle`)}</HomeTitle>
        <CategoryContainer />
      </div>

      {/* Uncomment in feature */}
      {/* <Container>
        <Hidden mdDown>
          <a target="_blank">
            {
              // todo vz obrazek z navrhu
            }
            <img
              alt="shop.expanzo.com"
              src="/img/tmp/banner.png"
              style={{ maxWidth: '100%', marginTop: '3rem' }}
            />
          </a>
        </Hidden>

        <HomePageItems />
      </Container> */}
    </div>
  );
}
