import {
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_COLOR_DARK,
} from '@/../styles/BaseStyle';
import styled from 'styled-components';

const HtmlLink = styled.a<{
  t: boolean;
}>`
  text-decoration: none;
  color: ${(props) => (props.t ? PRIMARY_TEXT_COLOR : PRIMARY_TEXT_COLOR_DARK)};
`;

export default HtmlLink;
