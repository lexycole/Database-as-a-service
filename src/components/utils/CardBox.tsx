import { CARD_BACKGROUND_DARK, CARD_BACKGROUND } from '@/../styles/BaseStyle';
import styled from 'styled-components';

const CardBox = styled.div<{
  t: boolean;
  display: string;
  w: string;
  h: string;
  m: string;
  p: string;
  rad: string;
  color: string;
  column: boolean;
  align: string;
  justify: string;
  noTopRadius: boolean;
}>`
  display: ${(props) => (props.display ? props.display : 'flex')};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  width: ${(props) => (props.w ? props.w : 'auto')};
  height: ${(props) => (props.h ? props.h : '100%')};
  margin: ${(props) => (props.m ? props.m : '0px')};
  padding: ${(props) => (props.p ? props.p : '0px')};
  flex-basis: ${(props) => (props.w ? props.w : '100%')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  border-radius: ${(props) =>
    props.noTopRadius ? '0px 0px 10px 10px' : props.rad ? props.rad : '10px'};
  color: ${(props) =>
    props.t ? CARD_BACKGROUND_DARK : props.color ?? CARD_BACKGROUND};
  background: ${(props) =>
    props.t ? props.bg ?? CARD_BACKGROUND : props.bg ?? CARD_BACKGROUND_DARK};
`;

export default CardBox;

export const CardBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
