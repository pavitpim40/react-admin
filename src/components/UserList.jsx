import { List, Datagrid, TextField, EmailField,UrlField } from 'react-admin';
import CustomUrlField from "./CustomUrlField";

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
           
            <TextField source="phone" />
            <CustomUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);