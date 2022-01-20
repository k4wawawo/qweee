import React,{useState, useContext} from 'react';
import {Container,FormLabel,FormInput,FormRow,FormBTC,
  FormWrapper, FormButton,DatePickerBg,MetaMask,IAM,
  FormInputLong,FormCheckbox,RightColumn} from './TransactionCreatorElements'
import {  Formik, Form} from "formik";
import DatePicker from 'react-date-picker';
import MetaMaskIMG from '../../images/metamask.png'
import { TransactionsContext } from '../../context/transactionsContext/TransactionsContext';
import { AuthContext } from '../../context/authContext/AuthContext';
import { withRouter } from 'react-router';

const TransactionCreator = ({history}) => {
  const [value, onChange] = useState(new Date());

  const transactionsContext = useContext(TransactionsContext)
  const {newTransaction,transactions} = transactionsContext

  const authContext = useContext(AuthContext)
  const {user} = authContext

  let initialValues = {
    kind: "buying",
    title: "",
    amountBTC: "",
    whoPayFee: "buyer",
    description: "",
    secondPersonEmail: "",
    terms: false,
  }

  const onSubmit = values =>{
    values.expireDate = value.toLocaleDateString("en-US")
    values.wallet = "xxxxxxxxxxxxxxxxx"
    values.status = "send"
    values.ownerId = user.id
    values.ownerEmail = user.email
    values.id = transactions[transactions.length-1].id + 1
    delete values.terms
    newTransaction(values)
    history.push('/profile')
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >{({setFieldValue})=>(
        <Form>
          <FormWrapper>
            <div>
              <div>
                <FormLabel>
                  <IAM>I am...</IAM>
                  <FormInput as="select" name="kind" 
                      onChange={(opt, e) => setFieldValue("kind",opt.target.value)}
                  >
                    <option value="buying">Buying</option>
                    <option value="selling">Selling</option>
                  </FormInput>
                  
                </FormLabel>
              </div>
              <div>
                <FormLabel>
                  <FormRow>
                    <FormInput type="text" name="title" required placeholder="Title"/>
                    <FormBTC>BTC:</FormBTC>
                    <FormInput name="amountBTC" type="number" step="0.000001" placeholder="BTC Amount" required/>
                  </FormRow>
                </FormLabel>
              </div>
              <MetaMask>
                <img src={MetaMaskIMG} alt="connect to metamask" />
              </MetaMask>
              <div>
                <FormLabel>
                  <p>Who pays fee</p>
                  <FormInputLong as="select" name="whoPayFee"
                    onChange={(opt, e) => setFieldValue("whoPayFee",opt.target.value)}
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                    <option value="50/50">50/50</option>
                  </FormInputLong>
                </FormLabel>
              </div>
              <div>
                <FormLabel>
                    <p>Description</p>
                    <FormInputLong as="textarea" name="description"
                      onChange={(opt, e) => setFieldValue("description",opt.target.value)}
                    />
                </FormLabel>
              </div>
            </div>
            <RightColumn>
              <div>
                <FormLabel>
                  <p>Expire Date</p>
                  <DatePickerBg>
                    <DatePicker
                      onChange={onChange}
                      value={value}
                    />
                    </DatePickerBg>
                </FormLabel>
              </div>
              <div>
                <FormLabel>
                  <p>Second preson address</p>
                  <FormInputLong required type="email" name="secondPersonEmail"/>
                </FormLabel>
              </div>
              <div>
                <FormCheckbox>
                  <FormInputLong type="checkbox" name="terms" required/>
                  Accept terms
                </FormCheckbox>-
              </div>
              <FormButton type="submit">SEND TRANSACTION</FormButton>
            </RightColumn>
          </FormWrapper>
        </Form>
        )}
      </Formik>
    </Container>
   );
}
 
export default withRouter(TransactionCreator);