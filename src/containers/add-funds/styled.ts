import styled from 'styled-components';

export const StyledDepositHistory = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 3vh;
  }
  align-items: center;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
`;

interface Props {
  colors: any;
}

export const HighlightCard = styled.div<Props>`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: white;
  display: flex;
  flex-direction: column;
  background: ${({ colors }) => {
    return `linear-gradient(65.4deg, ${colors[0]} 18.74%, ${colors[1]} 88.33%);`;
  }};
  width: 23vw;
  padding: 15px 15px 15px 20px;
  transition: all 0.2s;
  :hover {
    transform: scale(1.05);
  }
  cursor: pointer;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  svg {
    font-size: 2em;
    margin-top: 3px;
    font-weight: 600;
  }
  span {
    font-size: 1.3em;
  }
`;

export const CenterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;

  svg {
    font-size: 1.2em;
  }
  span {
    margin-left: 5px;
    font-size: 1em;
  }
`;

export const BottomSection = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  svg {
    font-size: 1em;
  }
  span {
    font-size: 0.9em;
  }
  cursor: pointer;
  border: none;
  background: rgb(174, 56, 73);
  color: white;
  padding: 5px 5px;
  box-shadow: 0px 0px 2px black, 0px 0px 2px black;

  transition: all 0.3s;
  :active {
    transform: scale(0.95);
  }
`;
