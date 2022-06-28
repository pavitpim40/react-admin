import "./App.css";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { UserList,UserEdit } from "./components/UserList";
import { PostList, PostEdit, PostCreate } from "./components/PostList";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "./authProvider";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './components/Dashboard';
import a from "./db/user.json"
// const postProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
import dataProvider from './dataProvider';
import FetchComponent from "./FetchComponent";
import userEvent from "@testing-library/user-event";

function App() {
  return (
    <Admin 
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    >
      {/* <Resource name="users" list={ListGuesser} /> */}
      <Resource 
      name="users" 
      list={UserList}  
      icon={UserIcon}
      edit={UserEdit}
      />
      {/* <Resource name="posts" list={ListGuesser} /> */}
      {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
      {/* <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      /> */}
    </Admin>
    // <FetchComponent/>
  );
}

export default App;
