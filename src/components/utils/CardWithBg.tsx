import styled from 'styled-components';

const CardWidthBg = styled.div<{ h: string | number; bgImg: string }>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bgImg});
  min-height: ${(props) => (props.h ? props.h : '200px')};
`;

export default CardWidthBg;
