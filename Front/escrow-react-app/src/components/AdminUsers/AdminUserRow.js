import React from 'react';
import {
  TableRow,
  EditButton,
  DeleteButton,
  Id,
  Name,
  Rest,
  Email,
} from './AdminUsersElements'

const AdminUserRow = ({user,onDelete,onEdit}) => {
  return ( 
    <TableRow>
      <Id>
        {user.id}
      </Id>
      <Name>
        {user.name}
      </Name>
      <Email>
        {user.email}
      </Email>
      <Rest>
        <EditButton onClick={()=>onEdit(user)}>Edit</EditButton>
        <DeleteButton onClick={()=>onDelete(user.id)}>Delete</DeleteButton>
      </Rest>
    </TableRow>
   );
}
 
export default AdminUserRow;