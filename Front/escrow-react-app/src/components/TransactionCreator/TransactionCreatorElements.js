import styled from "styled-components";
import {  Field } from "formik";


export const Container = styled.div`
  padding-top: 7rem;
  max-width: 650px;
  margin: 0 auto;
  font-size: 20px;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-weight: bold;
    color: #fff;
`;

export const FormCheckbox = styled.label`
    margin-bottom: 8px;
    font-weight: bold;
    color: #fff;
    font-size: 12px;
    input{
      margin-right: 10px;
    }
`;

export const FormWrapper = styled.div`
  padding: 15px;

`

export const FormInput = styled(Field)`
    padding: 5px 10px;
    margin-bottom: 1rem;
    margin-top: .25rem;
    border: none;
    border-radius: .5rem;
    font-size: 20px;
    max-width: 150px;
    @media(max-width: 800px){
      max-width: 100px;
    }
`;

export const FormInputLong = styled(FormInput)`
    max-width: 250px;
`

export const FormRow = styled.div`
 display: flex;
`

export const FormBTC = styled.div`
    padding: 5px 10px;
    margin-top: .25rem;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    border-radius: .5rem;
    background-color: #fff;
    color: black;
`;

export const FormButton = styled.button`
  background: #01bf72;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.2rem;
`;

export const DatePickerBg = styled.div`
  background-color: #fff;
  width: fit-content;
  border-radius: .5rem;
  margin-bottom: 1rem;
`

export const MetaMask = styled.div`
  color: white;
  margin: .5rem 0 1rem 0;
  cursor: pointer;
  img{
    border-radius: .5rem;
  }
`

export const IAM = styled.span`
 background-color: #01BF72;
 padding: 5px  10px ;
 border-radius: .5rem;
`

export const RightColumn = styled.div`

`