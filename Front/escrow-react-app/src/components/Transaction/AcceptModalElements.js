import styled from "styled-components";

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