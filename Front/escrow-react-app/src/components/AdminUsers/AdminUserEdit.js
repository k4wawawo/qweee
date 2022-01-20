import React from 'react';
import {Formik} from 'formik'
import {
  EditModalWrapper,
  EditModal,
  FormInput,
  Form,
  FormLabel,
  FormH1,
  FormButton,
  FormButtonDelete,
} from './AdminUsersElements'

const AdminUserEdit = ({onEdit,user,onCancel}) => {
  
  let initialValues = { name: user.name, email: user.email }

  const onSubmit = async values => {
    values.id = user.id
    values.isAdmin = user.isAdmin
    values.password = user.password
    onEdit(values)
    onCancel()
  }

  return ( 
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    >
      <EditModalWrapper>
        <EditModal>
          <Form>
              <FormH1>Edit user id - {user.id}</FormH1>
              <FormLabel htmlFor="for" >Name</FormLabel>
              <FormInput type="text" name="name" required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type="email" name="email" required />
              <FormButton type="submit">Edit</FormButton>
              <FormButtonDelete onClick={onCancel} type="submit">Cancel</FormButtonDelete>
          </Form>
        </EditModal>
      </EditModalWrapper>
    </Formik>
   );
}
 
export default AdminUserEdit;