import * as React from 'react';
import { ReactNode } from 'react';
import { DataLoadError } from '../error/DataLoadError';
import { Container } from '@material-ui/core';

type ContentWrapperProps = {
  title?: string | ReactNode;
  children?: ReactNode;
  icon?: any;
  isError?: boolean;
};

export function ContentWrapper(props: ContentWrapperProps) {
  return (
    <Container>
      <div className="mt-5 -mx-[40px]">
        <div className="flex justify-center">{props.icon}</div>
        <div className="mt-1">
          {props.title && (
            <span className="mt-0 text-[2.2rem] font-[700]">{props.title}</span>
          )}
        </div>
        {props.isError === true ? (
          <DataLoadError />
        ) : (
          <div className="mt-9 w-full"> {props.children}</div>
        )}
      </div>
    </Container>
  );
}
