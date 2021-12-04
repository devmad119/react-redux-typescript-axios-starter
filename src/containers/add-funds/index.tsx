import React from 'react';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaEthereum, FaHandHoldingUsd, FaBitcoin } from 'react-icons/fa';
import { SiLitecoin } from 'react-icons/si';
import { GiMoneyStack } from 'react-icons/gi';
import XMRIcon from 'assets/icons/xmr.svg';
import XRPIcon from 'assets/icons/xrp.svg';
import TetherIcon from 'assets/icons/tether.png';
import { StyledDepositHistory, CardSection, HighlightCard, TopSection, CenterSection, BottomSection } from './styled';

const AddFunds: React.FC = () => {
  return (
    <StyledDepositHistory>
      <CardSection>
        <HighlightCard colors={['rgb(251,89,29)', 'rgb(247,180,51)']}>
          <TopSection>
            <BsCurrencyBitcoin />
            <span>Bitcoin</span>
          </TopSection>
          <CenterSection>
            <BsCurrencyBitcoin />
            <span>Any amount is acceptable</span>
          </CenterSection>
          <BottomSection>
            <AiOutlinePlus />
            <span>Add Balance Using Bitcoin Currency</span>
          </BottomSection>
        </HighlightCard>
        <HighlightCard colors={['rgb(82,100,117)', 'rgb(45,63,81)']}>
          <TopSection>
            <FaEthereum />
            <span>Ether</span>
          </TopSection>
          <CenterSection>
            <FaEthereum />
            <span>Any amount is acceptable</span>
          </CenterSection>
          <BottomSection>
            <AiOutlinePlus />
            <span>Add Balance Using Ethereum Currency</span>
          </BottomSection>
        </HighlightCard>
        <HighlightCard colors={['rgb(91,136,229)', 'rgb(75,165,225)']}>
          <TopSection>
            <SiLitecoin />
            <span>Lite Coin</span>
          </TopSection>
          <CenterSection>
            <SiLitecoin />
            <span>Any amount is acceptable</span>
          </CenterSection>
          <BottomSection>
            <AiOutlinePlus />
            <span>Add Balance Using Lite Coin Currency</span>
          </BottomSection>
        </HighlightCard>
      </CardSection>
      <CardSection>
        <HighlightCard colors={['rgb(22,81,95)', 'rgb(108,173,126)']}>
          <TopSection>
            <FaHandHoldingUsd />
            <span>USD Tron/TRC-20</span>
          </TopSection>
          <CenterSection>
            <FaHandHoldingUsd />
            <span>Any amount is acceptable</span>
          </CenterSection>
          <BottomSection>
            <AiOutlinePlus />
            <span>Add Balance Using USD Tron/TRC-20</span>
          </BottomSection>
        </HighlightCard>
        <HighlightCard colors={['rgb(90,135,229)', 'rgb(76,166,225)']}>
          <TopSection>
            <FaBitcoin />
            <span>Bitcoin Cash</span>
          </TopSection>
          <CenterSection>
            <FaBitcoin />
            <span>Any amount is acceptable</span>
          </CenterSection>
          <BottomSection>
            <AiOutlinePlus />
            <span>Add Balance Using Bitcoin Cash Currency</span>
          </BottomSection>
        </HighlightCard>
        <HighlightCard colors={['rgb(149,1,32)', 'rgb(69,9,20)']}>
          <TopSection>
            <GiMoneyStack />
            <span>Perfect Money</span>
          </TopSection>
          <CenterSection>
            <GiMoneyStack />
            <span>Min/Max is 20 USD/5000 USD</span>
          </CenterSection>
          <BottomSection>
            <AiOutlinePlus />
            <span>Add Balance Using Perfect Money</span>
          </BottomSection>
        </HighlightCard>
      </CardSection>
      <CardSection>
        <HighlightCard colors={['rgb(172, 0, 230)', 'rgb(210, 77, 255)']}>
          <TopSection>
            <img src={XMRIcon} alt="xmr" />
            <span>XMR</span>
          </TopSection>
          <CenterSection>
            <img src={XMRIcon} alt="xmr" width={20} height={20} />
            <span>Any amount is acceptable</span>
          </CenterSection>
          <BottomSection>
            <AiOutlinePlus />
            <span>Add Balance Using XMR Currency</span>
          </BottomSection>
        </HighlightCard>
        <HighlightCard colors={['rgb(51, 214, 255)', 'rgb(0, 163, 204)']}>
          <TopSection>
            <img src={XRPIcon} alt="xmr" width={30} height={30} />
            <span>XRP</span>
          </TopSection>
          <CenterSection>
            <img src={XRPIcon} alt="xrp" width={20} height={20} />
            <span>Any amount is acceptable</span>
          </CenterSection>
          <BottomSection>
            <AiOutlinePlus />
            <span>Add Balance Using XRP Currency</span>
          </BottomSection>
        </HighlightCard>
        <HighlightCard colors={['rgb(102, 102, 102)', 'rgb(140, 140, 140)']}>
          <TopSection>
            <img src={TetherIcon} alt="xmr" width={30} height={30} />
            <span>Tether</span>
          </TopSection>
          <CenterSection>
            <img src={TetherIcon} alt="xrp" width={20} height={20} />
            <span>Any amount is acceptable</span>
          </CenterSection>
          <BottomSection>
            <AiOutlinePlus />
            <span>Add Balance Using Tether Currency</span>
          </BottomSection>
        </HighlightCard>
      </CardSection>
    </StyledDepositHistory>
  );
};

export default AddFunds;
