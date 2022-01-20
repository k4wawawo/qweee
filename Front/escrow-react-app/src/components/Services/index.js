import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {ServicesContainer, ServicesH1,
       ServicesWrapper, ServicesCard,
       ServicesIcon, ServicesH2, 
       ServicesP} from './ServiceElements';

const Services = () => {
    return (
      <ServicesContainer id='services'>
        <ServicesH1>Our services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}  />
            <ServicesH2>General Merchandise</ServicesH2>
            <ServicesP>You can safely and easily buy and sell merchandise all over the world with the protection of Escaroo.com's secure smart contract-based BTC Escrow services.</ServicesP>
          </ServicesCard>
          <ServicesCard>
          <ServicesIcon src={Icon2} />
            <ServicesH2>Milestone Transactions</ServicesH2>
            <ServicesP>The parties agree on the terms and conditions of the transaction and once they are met, the money is transferred to the recipient's account.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Protects equally all parties involved in a transaction.</ServicesH2>
            <ServicesP>People resort to BTC-Escrow when they need to buy or sell something of value but don’t know the other party, regardless of where the transaction takes place.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    );
};

export default Services;
