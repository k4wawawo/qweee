import React,{useEffect,useContext,useState} from 'react';
import {
  Heading,
  Container,
  Table,
  TableHead,
  TableBody,
  Id,
  Name,
  Rest,
  Email,
} from './AdminUsersElements'
import AdminUserRow from './AdminUserRow';
import { UsersContext } from '../../context/usersContext/UsersContext';
import AdminUserEdit from './AdminUserEdit';

const AdminUsers = () => {
  const [editUserData, setEditUser] = useState(null)

  const onEdit = user => setEditUser(user)
  const onCancel = () => setEditUser(null)

  const usersContext = useContext(UsersContext);
  const { deleteUser ,users,getUsers,editUser } = usersContext

  useEffect(() => {
    if(!users.lenght){
      getUsers()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Heading>Users menagment</Heading>
      <Table>
        <TableHead>
          <Id>ID</Id><Name>Name</Name><Email>Email</Email><Rest></Rest>
        </TableHead>
        <TableBody>
            {users ? users.map(user=><AdminUserRow key={user.id} user={user} onDelete={deleteUser} onEdit={onEdit}/> ) : false}
        </TableBody>
      </Table>
      {editUserData ? <AdminUserEdit user={editUserData} onEdit={editUser} onCancel={onCancel}/> : null}
    </Container>
  );
}

export default AdminUsers;