import styled from "styled-components";
import {Link} from 'react-router-dom'

export const UserImage = styled.div`
  width: 100%;
  background-color: #555;
  margin: 5rem 10px 10px 10px;
  border-radius: .5rem;
`
export const UserProf = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  padding-top: 1rem;
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
  cursor: pointer;
`

export const Email = styled(Text)`
  font-size: 1.2rem;
`

export const UserName = styled(Text)`
  color: #252525;
  font-size: 1rem;
`

export const NewTransaction = styled(Link)`
  background-color: #01BF71;
  padding: 15px 25px;
  text-transform: uppercase;
  width: 100%;
  text-decoration: none;
  font-weight: bold;
  color: white;
  display:block;
  text-align:center;
`

export const Modal = styled.div`
  background-color: #fff;
  padding: 15px;
  max-width: 360px;
`

export const ModalWrapper = styled.div`
  position: absolute;
  top:0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,.3);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalText = styled.p`
  color: black;
  font-weight: bold;
  padding-bottom: 1rem;
  text-align: center;
`

export const ButtonAccept = styled.div`
  padding: 7px 25px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #01BF71;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
`

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  font-size: 1.2rem;
  margin-bottom: .5rem;
`

export const ButtonReject = styled(ButtonAccept)`
  background-color: red;
  margin-left: 1rem;
`

export const Buttons = styled.div`
  display: flex;
`