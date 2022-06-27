import "./App.css";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { UserList } from "./components/UserList";
import { PostList, PostEdit, PostCreate } from "./components/PostList";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      {/* <Resource name="users" list={ListGuesser} /> */}
      <Resource name="users" list={UserList} />
      {/* <Resource name="posts" list={ListGuesser} /> */}
      {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
    </Admin>
  );
}

export default App;
