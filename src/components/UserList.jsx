import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  FunctionField,
  EditButton,
  useRecordContext,
  SearchInput
} from "react-admin";
import CustomUrlField from "./CustomUrlField";

const CustomTextField = (props) => (
  <FunctionField
    label="name"
    render={(record) => `${record[props.field]}`}
  />
);
const userFilters = [
    <SearchInput source="q" alwaysOn />
]
const UserHeaderEdit = () => {
    const record = useRecordContext();
    return <span>{record ? `${record.nameThai}` : `${record.id}`}</span>;
}
export const UserList = () => (
  <List filters={userFilters}>
    <Datagrid rowClick="edit">
      <EmailField source="email" />
      <CustomTextField source="ชื่อ-สกุล" field="nameThai"/>
      <TextField source="nameEng" />
      <CustomTextField source="active" field="isActive"/>
      <TextField source="sectionId" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = () => {
  return (
    <Edit title={<UserHeaderEdit/>}>
      <SimpleForm>
        <TextInput disabled source="id" fullWidth/>
        <TextInput source="email" fullWidth/>
        <TextInput source="nameThai" fullWidth/>
        <TextInput source="nameEng" fullWidth/>
        <TextInput source="isActive" fullWidth/>
        <TextField source="sectionId" fullWidth/>
      </SimpleForm>
    </Edit>
  );
};
