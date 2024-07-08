import * as React from 'react';
import { ImageContainer } from '@/components/detail/BoxStyle';
import { Grid } from '@material-ui/core';
import Link from 'next/link';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

type WebImageContainerProps = {
  data: WebImageData[];
};

export type WebImageData = {
  url: string;
  image: string;
};

function getImagePath(filename: string): string {
  return `/firmWebImage/${filename.substring(0, 2)}/${filename.substring(
    0,
    4,
  )}/${filename}`;
}

export function ImageCard({ url, image }: WebImageData) {
  const [theme] = useRecoilState(appTheme);

  return (
    <ImageContainer t={theme}>
      <img className="img" src={getImagePath(image)} alt={url} />
      <div className="link">
        <Link href={`http://${url}`} passHref>
          <a className="link-text" target="_blank">
            {url}
          </a>
        </Link>
      </div>
    </ImageContainer>
  );
}

function WebImage(props: { imageData: WebImageData }) {
  return (
    <Grid item xs={12} md={6} lg={4} style={{ marginBottom: '2.2rem' }}>
      <ImageCard url={props.imageData.url} image={props.imageData.image} />
    </Grid>
  );
}

export function WebImageContainer(props: WebImageContainerProps) {
  return (
    <Grid container>
      {props.data.map((item: WebImageData) => (
        <WebImage imageData={item} />
      ))}
    </Grid>
  );
}
