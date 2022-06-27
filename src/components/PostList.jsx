import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    useRecordContext,

} from 'react-admin';

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

const PostTitle = () => {
    const record = useRecordContext();   
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostList = () => (
    <List filters={postFilters}>
        {/* <Datagrid rowClick="edit"> */}
        <Datagrid>
            <TextField source='id' />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit title={<PostTitle/>}>
        <SimpleForm> 
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                {/* <SelectInput optionText="id" /> */}
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            {/* <TextInput source="body" /> */}
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
       <Create {...props}>
        <SimpleForm>
               <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
               </ReferenceInput>
               <TextInput source="title" />
            <TextInput multiline source="body" />
            </SimpleForm>
        </Create>
);