import { useState, useEffect } from "react";

import User from "./User.jsx";

export default function UserList({ users, query, setQuery }) {
  function renderUsers(user) {
    return (
      < User key={user._id} id={user._id} username={user.username} />  // pass the props, and use _id not id)
    );
  }

  const onQuery = (evt) => {
    console.log("🏓 onQuery", evt.target.value);
    setQuery(evt.target.value);
  };

  console.log("👩🏼‍🎨 Render UserList", users);
  return (
    <div>
      <h2>Users</h2>
      <input
        value={query}
        onChange={onQuery}
        placeholder="Filter users..."
      />
      {!users?.length ? (
        <div>Loading users...</div>
      ) : (
        users.map(renderUsers)
      )}
    </div>
  );
}

