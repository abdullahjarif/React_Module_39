import { use } from "react";
import DisplayList from "./displayList";

export default function UserList({ userLists }) {
  const listUsers = use(userLists);
  return (
    <div className="card">
      <h2 style={{
        color: '#4CAF50'
      }}>User List Application</h2>
      <h3>Users: {listUsers.length}</h3>
      {listUsers.map((listUser) => (
        <DisplayList listUser={listUser}></DisplayList>
      ))}
    </div>
  );
}
