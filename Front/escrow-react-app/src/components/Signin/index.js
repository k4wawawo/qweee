import React,{useContext ,useEffect} from 'react'
import { Container, FormContent,
         FormInput, FormWrap, 
         Icon, Text, FormButton,
         FormLabel, FormH1, Form } from './SigninElements'
import { Formik } from "formik";
import { AuthContext } from '../../context/authContext/AuthContext';
import { withRouter } from 'react-router-dom'

const Signin = ({history}) => {
    const authContext = useContext(AuthContext);
    const { loginUser,isLogin } = authContext

    let initialValues = { password: "", email: "" }

    const onSubmit = async values => {
        loginUser(values)
        initialValues = { password: "", email: "" }
    }

    useEffect(() => {
        if(isLogin){
            history.push('/')
        }
        // eslint-disable-next-line
    }, [isLogin])
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
        <Container>
            <FormWrap>
                <Icon to="/">Escrow</Icon>
                <FormContent>
                    <Form>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for" >Email</FormLabel>
                        <FormInput type="email" name="email" required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type="password" name="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </Formik>
    );
};

export default withRouter(Signin);
