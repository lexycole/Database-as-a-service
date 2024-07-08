/* eslint-disable */
'use strict';

import styled from 'styled-components';

export const DescriptionText = styled.div`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.72rem;
  font-weight: 500;
  margin-top: 3rem
  margin: auto;
  max-width: 850px;
`;

export const ListItems = styled.div`
  text-align: left;

  ul {
    list-style: none;
  }

  li {
    margin: 3px 0;
    position: relative;

    &:before {
      content: '\\2022';
      color: ${(props) => `#${props.background ?? `00C29D`}`};
      position: absolute;
      top: -0.4em;
      left: -0.5em;
      font-weight: bold;
      font-size: 2.4rem;
      width: 1em;
      margin: 0;
    }
  }
`;
