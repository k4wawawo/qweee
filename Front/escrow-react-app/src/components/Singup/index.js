import React,{useContext ,useEffect} from 'react'
import { Container, FormContent,
    FormInput, FormWrap, 
    Icon, Text, FormButton,
    FormLabel, FormH1, Form } from './SignupElements'
import { AuthContext } from '../../context/authContext/AuthContext';
import { Formik } from "formik";
import { withRouter } from 'react-router-dom'
import { UsersContext } from '../../context/usersContext/UsersContext';

const Signup = ({history}) => {
    const authContext = useContext(AuthContext);
    const { isLogin } = authContext

    const usersContext = useContext(UsersContext);
    const { registerUser } = usersContext

    let initialValues = { password: "", email: "" ,name: ""}

    const onSubmit = async values => {
        await registerUser(values)
        initialValues = { password: "", email: "" ,name: ""}
        history.push('/signin')
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
                        <Form action="#">
                            <FormH1>Create new account</FormH1>
                            <FormLabel htmlFor="for">Name</FormLabel>
                            <FormInput type="Name" name="name" required />
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="Email" name="email" required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" name="password" required />
                            <FormButton type="submit">Continue</FormButton>                            
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </Formik>
    );
};

export default withRouter(Signup);
