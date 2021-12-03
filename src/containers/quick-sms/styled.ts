import styled from 'styled-components';
import theme from 'styles/theme';

export const StyledQuickSMS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageStatistics = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const MessageStatisticsHeader = styled.div`
  background-color: ${theme.color.background.highlight};
  border-radius: 5px 5px 0px 0px;
  padding: 10px 0px 10px 10px;
  text-shadow: 0px 0px 5px #56c4f4, 0px 0px 10px #56c4f4;
`;

export const MessageStatisticsBody = styled.div`
  display: flex;
  background-color: ${theme.color.background.panel};
  padding: 10px 35px;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 5px 5px;
`;

interface StateProps {
  variant: string;
}

export const State = styled.div<StateProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: ${({ variant }) => '0px 0px 5px ' + variant + ', 0px 0px 10px ' + variant};
`;

export const Sendout = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const PhoneNumbers = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const PhoneNumbersHeader = styled.div`
  background-color: ${theme.color.background.highlight};
  border-radius: 5px 5px 0px 0px;
  padding: 10px 0px 10px 10px;
  text-shadow: 0px 0px 5px #56c4f4, 0px 0px 10px #56c4f4;
`;

export const PhoneNumbersBody = styled.div`
  display: flex;
  background-color: ${theme.color.background.panel};
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 5px 5px;
  min-height: calc(100vh - 364px);
`;

export const MessageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const InputHeader = styled.div`
  background-color: ${theme.color.background.highlight};
  border-radius: 5px 5px 0px 0px;
  padding: 10px 0px 10px 10px;
  text-shadow: 0px 0px 5px #56c4f4, 0px 0px 10px #56c4f4;
`;

export const InputBody = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  padding: 15px 10px 15px 15px;
  background-color: ${theme.color.background.panel};
  min-height: calc(100vh - 420px);
  max-height: calc(100vh - 420px);
  border-radius: 0px 0px 5px 5px;
  border: 0px ${theme.color.background.panel} solid !important;
  color: white;
  font-size: 15px;
  outline: none;
  font-family: 'Montserrat', sans-serif;
`;

export const OptionalSection = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  justify-content: space-between;
`;

export const StyledSelect = styled.select`
  margin-right: 10px;
  padding: 8px 5px 8px 8px;
  background-color: ${theme.color.background.highlight};
  border-radius: 5px 5px 5px 5px;
  border: 0px ${theme.color.background.panel} solid !important;
  color: white;
  font-size: 15px;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
`;
