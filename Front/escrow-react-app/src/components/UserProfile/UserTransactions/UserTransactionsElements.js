import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  border-radius: .5rem;
  margin: 5rem 20px 20px 20px;
`

export const Section = styled.section`

`

export const Heading = styled.h2`
  color: white;
  padding-left: 15px;
`

export const Items = styled.div`
  padding: 10px;
  color:white;
`

export const TransContainer = styled(Link)`
  display: flex;
  color: white;
  margin: 10px 0;
  border: 2px solid #01BF71;
  border-radius: 1rem;
  padding: 8px 20px;
  cursor: pointer;
  text-decoration: none;
  transition: .1s linear all;
  &:hover{
    background-color: #555555;
  }
`

export const TransDetails = styled.div`
  flex-grow:1;
`

export const TransTitle = styled.h3`
  color: #7e7e7e;
`

export const TransMeta = styled.div`
  @media(max-width: 800px){
    display: flex;
    flex-direction: column;
  }
`

export const TransMetaItem = styled.span`
  padding-right: 10px;
  margin-right: 10px;
  border-right: 2px solid #01BF71;
  &:last-child{
    border-right: none;
    font-weight: bold;
  }
`

export const TransInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TransInfoBtn = styled.div`
  padding: 7px 15px;
  background-color:#01BF71;
  border-radius: 2rem;
  font-weight: bold;
`