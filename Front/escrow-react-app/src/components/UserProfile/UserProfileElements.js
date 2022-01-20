import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 800px){
    flex-direction: column;
  }
`

export const Left = styled.div`
  flex-basis: 35%;
`

export const Right = styled.div`
 flex-basis: 65%;
`