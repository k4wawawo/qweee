import React from 'react';
import {Title,H3,MetaDataContainer,MetaData,
  PriceDetailsContainer,PriceDetails,H5,Desc,
  Participants,Participant,ParticipantData,Price,Back} from './TransactionElements'

const TransactionDetails = ({transaction}) => {
  const {id,kind,title,amountBTC,whoPayFee, description, expireDate,
    secondPersonEmail, ownerEmail,status, completeDate} = transaction

  const fee = amountBTC * 0.02

  return ( 
    <div>
        <H3>Transaction Details</H3>
        <Back to="/profile">&lt;	Back to profile</Back>
        <Title>{title}</Title>
        <H3>Status: {status.toUpperCase()}</H3>
        <MetaDataContainer>
          {status !== "complete" ? <MetaData>Expire Date: {expireDate}</MetaData>: <MetaData>Complete Date: {completeDate}</MetaData>}
          <MetaData>Transaction ID: {id}</MetaData>
        </MetaDataContainer>
        <PriceDetailsContainer>
          <PriceDetails>
            <div>Buyer pays:</div>
            <Price>{amountBTC} BTC</Price>
          </PriceDetails>
          <PriceDetails>
            <div>Fee (pay by {whoPayFee}):</div>
            <Price>{fee} BTC</Price>
          </PriceDetails>
          <PriceDetails>
            <div>Seller recive</div>
            <Price>{amountBTC - fee} BTC</Price>
          </PriceDetails>
        </PriceDetailsContainer>
        <div>
          <H5>Description</H5>
          <Desc>{description}</Desc>
        </div>
        <div>
          <H5>Participants</H5>
          <Participants>
              <Participant>
                <span>Buyer:</span><ParticipantData>{kind === "buying" ? ownerEmail : secondPersonEmail}</ParticipantData>
              </Participant>
              <Participant>
                <span>Seller:</span><ParticipantData>{kind === "selling" ? ownerEmail : secondPersonEmail}</ParticipantData>
              </Participant>
          </Participants>
        </div>
    </div>
   );
}
 
export default TransactionDetails;