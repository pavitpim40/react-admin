import "./App.css";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { UserList, UserEdit } from "./components/UserList";
import { PostList, PostEdit, PostCreate } from "./components/PostList";
import { RoleList } from "./components/RoleList";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "./authProvider";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import Dashboard from "./components/Dashboard";
import simpleRestProvider from "ra-data-simple-rest";

import a from "./db/user.json";

import dataProvider from "./dataProvider";
import FetchComponent from "./FetchComponent";


// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
// REST PROVIDER
// const dataProvider = simpleRestProvider(
//   "https://42bkk-tas.azurewebsites.net/api/Core/Users"
// );

function App() {
  console.log(dataProvider);
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
    >
      <Resource name="users" list={UserList} icon={UserIcon} edit={UserEdit} />
      <Resource name="sections" list={ListGuesser} />
      <Resource name="roles" list={RoleList} />
      
      {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
      {/* <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      /> */}
    </Admin>
    // <FetchComponent />
  );
}

export default App;
