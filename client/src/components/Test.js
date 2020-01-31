import React, { useState, useEffect } from "react";

export default function Test() {
  const [users, setUsers] = useState({});

  const theusers = async () => {
    const res = await fetch("/api/users");
    const data = await res;
    setUsers(data);
    console.log(data);
    console.log(users);
  };

  useEffect(() => {
    theusers();
  }, []);

  return <div>Hello fuckers</div>;
}
