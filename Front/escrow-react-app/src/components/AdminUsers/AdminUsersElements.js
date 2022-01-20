import styled from "styled-components";
import {  Field, Form as FormikForm } from "formik";


export const Heading = styled.h2`
  color:#01bf71;
  text-transform: uppercase;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
`

export const Container = styled.div`
 max-width: 1200px;
 margin: 5rem auto 0 auto;
`

export const Table = styled.div`
  width: 600px;
  margin: 0 auto;
  color: white;
  text-align: center;
  border: 2px solid #01bf71;
  border-radius: .5rem;
`

export const TableHead = styled.div`
  display:flex;
  font-weight: bold;
  background-color: #01bf71;
`

export const TableBody = styled.div`

`

export const TableRow = styled.div`
  display:flex;
  
`

export const EditButton = styled.div`
 padding: 2px 5px;
 background-color: #01bf71;
 font-weight: bold;
 cursor: pointer;
`

export const DeleteButton = styled.div`
  margin-left: 5px;
 padding: 2px 5px;
 background-color: #d54959;
 font-weight: bold;
 cursor: pointer;
`

export const Id = styled.div`
  width: 10%;
  padding: 5px 10px ;
  line-height: 1.75;
`

export const Name = styled.div`
  width: 35%;
  padding: 5px 10px ;
  line-height: 1.75;
`

export const Email = styled.div`
  width: 30%;
  padding: 5px 10px ;
  line-height: 1.75;
`
export const Rest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 5px 10px ;
  line-height: 1.75;
`

export const EditModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.3);
  z-index: 50;
`

export const EditModal = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled(Field)`
    padding: 16px 16px;
    margin-bottom: 32px;
    border-radius: 4px;
    color: black;
`;

export const Form = styled(FormikForm)`
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormButton = styled.button`
  background: #01bf72;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const FormButtonDelete = styled.div`
  margin-top: .75rem;
  background: black;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
`;
