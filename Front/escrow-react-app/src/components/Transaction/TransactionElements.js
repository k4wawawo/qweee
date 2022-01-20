import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 5rem;
  color: white;
  padding: 5rem 15px 0 15px;
`

export const Title = styled.h4`
  color:#01BF71;
  font-size: 1.8rem;
  margin: 1rem 0 .5rem 0;
`

export const H3 = styled.h3`

`

export const MetaDataContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 2px solid #01BF71;
`

export const MetaData = styled.div`
  border-right: 2px solid #01BF71;
  padding: 0 10px;
  &:first-child{
    padding: 0 10px 0 0 ;
  }
  &:last-child{
    border-right: none;
  }
`

export const PriceDetailsContainer = styled.div`
  padding: 1rem 0;
`

export const PriceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .3rem;
`

export const Price = styled.div`
  font-weight: bold;
  color:#01BF71;
`

export const H5 = styled.h5`
  color:#01BF71;
  font-size: 1.3rem;
`

export const Desc = styled.div`
 padding: 1rem 0 1.5rem 0;
`

export const Participants = styled.div`
  padding: 1rem 0;
`

export const Participant = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: .25rem;
`

export const ParticipantData = styled.span`
  font-weight: bold;
  color:#01BF71;
`

export const MetaMask = styled.div`
  color: white;
  margin: .5rem 0 1rem 0;
  cursor: pointer;
  img{
    border-radius: .5rem;
  }
`

export const Buttons = styled.div`
  display: flex;
`

export const ButtonAccept = styled.div`
  padding: 7px 25px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #01BF71;
  font-size: 1.5rem;
  cursor: pointer;
`

export const ButtonReject = styled(ButtonAccept)`
  background-color: red;
  margin-left: 1rem;
`

export const Back = styled(Link)`
  padding: 3px 10px;
  font-size:1rem;
  background-color: white;
  margin: 1rem 0 0 0;
  display: block;
  width: fit-content;
  text-decoration: none;
  color: black;
  font-weight: bold;
`


