import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import {
  StyledQuickSMS,
  MessageStatistics,
  MessageStatisticsHeader,
  MessageStatisticsBody,
  State,
  Sendout,
  PhoneNumbers,
  PhoneNumbersHeader,
  PhoneNumbersBody,
  MessageSection,
  InputSection,
  InputHeader,
  InputBody,
  OptionalSection,
  StyledSelect,
} from './styled';
import HighlightButton from 'components/highlight-button';

const buttonLabels = ['Test', 'Send'];

const QuickSMS: React.FC = () => {
  const [sendState, SetSendState] = useState<number>(0);

  const handleSubmit = () => {
    SetSendState(sendState + 1);
  };

  return (
    <StyledQuickSMS>
      <MessageStatistics>
        <MessageStatisticsHeader>Message Statistics</MessageStatisticsHeader>
        <MessageStatisticsBody>
          <State variant="#0099ff">
            <span>0</span>
            <span>Pending</span>
          </State>
          <State variant="#ff9933">
            <span>0</span>
            <span>Queued</span>
          </State>
          <State variant="#9966ff">
            <span>0</span>
            <span>Sent</span>
          </State>
          <State variant="#ff5050">
            <span>0</span>
            <span>Failed</span>
          </State>
          <State variant="#cc33ff">
            <span>0</span>
            <span>Delivered</span>
          </State>
        </MessageStatisticsBody>
      </MessageStatistics>
      <Sendout>
        <PhoneNumbers>
          <PhoneNumbersHeader>Phone Numbers</PhoneNumbersHeader>
          <PhoneNumbersBody></PhoneNumbersBody>
        </PhoneNumbers>
        <MessageSection>
          <InputSection>
            <InputHeader>Write the message in here.</InputHeader>
            <InputBody></InputBody>
          </InputSection>
          <OptionalSection>
            <StyledSelect>
              <option>T-Mobile</option>
              <option>At & t</option>
              <option>Verizon</option>
              <option>Sprint</option>
              <option>Metro pcs</option>
            </StyledSelect>
            <HighlightButton loading={false} onClick={handleSubmit}>
              <FiSend/>
              <label>{buttonLabels[sendState % 2]}</label>
            </HighlightButton>
          </OptionalSection>
        </MessageSection>
      </Sendout>
    </StyledQuickSMS>
  );
};

export default QuickSMS;
