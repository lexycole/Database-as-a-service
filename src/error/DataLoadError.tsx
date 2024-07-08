import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons';
import getLang from '../lang/Lang';
import { ErrorContainer } from '../../styles/Style';

import { Button } from '@material-ui/core';
import {
  GRAY_TEXT_COLOR,
  GRAY_TEXT_COLOR_DARK,
  PRIMARY_COLOR,
  PRIMARY_COLOR_DARK,
} from '@/../styles/BaseStyle';
import { useRouter } from 'next/router';
import { theme } from '@/../tailwind.config';
import RotateRightIcon from '@material-ui/icons/RotateRight';

export function DataLoadError() {
  const router = useRouter();

  return (
    <ErrorContainer>
      <div className="min-h-[70vh]">
        <div className="min-h-[55vh] w-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
            <div className="mt-5">
              <h1 className="text-2xl font-[700]">
                {getLang(`error`, `error`)}
              </h1>
              <h2 className="mt-2 text-5xl font-[900]">
                {getLang(`error`, `warningError`)}
              </h2>
              <p
                className="mt-3 text-xl"
                style={{
                  color: theme ? GRAY_TEXT_COLOR : GRAY_TEXT_COLOR_DARK,
                }}
              >
                {getLang(`error`, `dataLoadError`)}
              </p>

              <div className="mt-3">
                <Button
                  onClick={() => {
                    router.reload();
                  }}
                  style={{
                    fontSize: '1.2rem',
                    margin: '0 2rem',
                    color: theme ? PRIMARY_COLOR_DARK : PRIMARY_COLOR,
                  }}
                >
                  <div className="mx-5">
                    <span>Try Again </span>
                    <RotateRightIcon
                      style={{
                        marginLeft: 10,
                        position: 'relative',
                        top: 10,
                        fontSize: '1.7rem',
                      }}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorContainer>
  );
}
