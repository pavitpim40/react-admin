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
    SearchInput,
    ShowButton
  } from "react-admin";
  import CustomUrlField from "./CustomUrlField";
  
  const CustomTextField = (props) => (
    <FunctionField
      label="name"
      render={(record) => `${record[props.field] || "-"}`}
    />
  );
  const userFilters = [
      <SearchInput source="q" alwaysOn />
  ]
  const UserHeaderEdit = () => {
      const record = useRecordContext();
      return <span>{record ? `${record.nameThai}` : `${record.id}`}</span>;
  }

  const CommentShowButton = () => <ShowButton label="Show comment" />;
  export const RoleList = () => (
    <List filters={userFilters} >
      <Datagrid >
      <TextField source="code" />
        <CustomTextField source="role" field="normalizedName"/>
        <CustomTextField source="description" field="nameThai"/>
        <CustomTextField source="remark" field="remark"/>
        <CommentShowButton/>
        <EditButton />
      </Datagrid>
    </List>
  );
  
//   export const UserEdit = () => {
//     return (
//       <Edit title={<UserHeaderEdit/>}>
//         <SimpleForm>
//           <TextInput disabled source="id" fullWidth/>
//           <TextInput source="email" fullWidth/>
//           <TextInput source="nameThai" fullWidth/>
//           <TextInput source="nameEng" fullWidth/>
//           <TextInput source="isActive" fullWidth/>
//           <TextField source="sectionId" fullWidth/>
//         </SimpleForm>
//       </Edit>
//     );
//   };
   