import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  margin: 5rem auto 0 auto;
  max-width: 1100px;
  background-color: #444;
  border-radius: .5rem;
  padding: 40px 20px 30px 20px;
`
export const AdminImage = styled.div`
  flex-basis: 35%;
`
export const AdminProf = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display:block;
`

export const TextContainer = styled.div`
  padding: 15px;
  text-align: center;
`

export const Text = styled.p`
  line-height: 1.5;
  font-weight: bold;
  font-size: 1.5rem;
  color: #01bf71;
`

export const Email = styled(Text)`
  font-size: 1.2rem;
`

export const AdminName = styled(Text)`
  color: #252525;
  font-size: 1rem;
`

export const AdminWallet = styled.div`
  flex-basis: 65%;

`

export const Heading = styled.h2`
  color: #252525;
`

export const AdressContainer = styled.p`
  padding: 10px 0;
  font-weight: 600;
  color: #252525;
`

export const Adress = styled.span`
  color: #01bf71;
`

export const BTC = styled.div`
  font-weight: bold;
  color: #252525;
`

export const BTCAmount = styled.p`
  font-size: 2rem;
  color: #01bf71;
`

export const BTCText = styled.span`
  padding-right: 10px;
  font-size: 3rem;
  color: #F7AE10;
`