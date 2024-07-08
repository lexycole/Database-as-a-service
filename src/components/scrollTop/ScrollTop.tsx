import * as React from 'react';
import { useScrollTrigger, Zoom } from '@material-ui/core';
import styled from 'styled-components';

interface ScrollTopProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactNode;
}

const ScrollButton = styled.div`
  right: 16px;
  bottom: 16px;
  position: fixed;
`;

export function ScrollTop(props: ScrollTopProps) {
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(`#content-start`);

    if (anchor) {
      anchor.scrollIntoView({ behavior: `smooth`, block: `center` });
    }
  };

  return (
    <Zoom in={trigger}>
      <ScrollButton onClick={handleClick} role="presentation">
        {children}
      </ScrollButton>
    </Zoom>
  );
}
