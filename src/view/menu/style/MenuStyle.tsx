/* eslint-disable */
'use strict';

import styled from 'styled-components';
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../../../../styles/BaseStyle';

export const AccountContainer = styled.div`
  .MuiButton-root {
    min-width: 30px;

    .MuiButton-startIcon {
      border: 1px solid ${PRIMARY_COLOR};
      padding: 8px;
      border-radius: 50%;
      background-color: ${PRIMARY_COLOR};
    }

    svg {
      color: ${PRIMARY_TEXT_COLOR};
      font-size: 14px;
      width: 14px;
      height: 14px;
    }
  }
`;

export const UserNameSpan = styled.span`
  color: yellow;
  margin-left: 10px;
  font-size: 15px;
`;
export const NavWrapper = styled.nav`
  .MuiButton-root {
    color: ${PRIMARY_TEXT_COLOR};
  }
`;

export const NavBarItems = styled.div``;

export const LocaleFlag = styled.span`
  font-size: 1.1rem;
  padding-right: 6px;
`;
