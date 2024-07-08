import styled from 'styled-components';

const Spacer = styled.div<{
  t?: number;
  r?: number;
  b?: number;
  l?: number;
  x?: number;
  y?: number;
}>`
  margin-top: ${(props) =>
    props.t ? props.t : props.y ? `${props.y}px` : `0`};
  margin-bottom: ${(props) =>
    props.b ? props.b : props.y ? `${props.y}px` : `0`};
  margin-left: ${(props) =>
    props.l ? props.l : props.x ? `${props.x}px` : `0`};
  margin-right: ${(props) =>
    props.r ? props.r : props.x ? `${props.x}px` : `0`};
`;

export default Spacer;
