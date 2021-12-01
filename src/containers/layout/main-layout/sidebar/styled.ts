import styled from 'styled-components';
import { heading } from 'styles/typography';

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  img {
    text-align: center;
    animation-name: spin, depth;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 3s;
  }
  @keyframes spin {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(-360deg);
    }
  }
  @keyframes depth {
    0% {
      text-shadow: 0 0 black;
    }
    25% {
      text-shadow: 1px 0 black, 2px 0 black, 3px 0 black, 4px 0 black, 5px 0 black;
    }
    50% {
      text-shadow: 0 0 black;
    }
    75% {
      text-shadow: -1px 0 black, -2px 0 black, -3px 0 black, -4px 0 black, -5px 0 black;
    }
    100% {
      text-shadow: 0 0 black;
    }
  }
`;

export const LogoTitle = styled.h4`
  ${heading.h4.bold};
  margin-left: 10px;
  color: white;
  text-align: center;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  animation: blur 1.2s ease-out infinite;
  text-shadow: 0px 0px 5px #fff, 0px 0px 10px #fff;
`;
