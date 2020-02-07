import React, { useState, useEffect } from "react";

export default function Post() {
  fetch("https://localhost:5000/api/users/register", {
    method: "POST",
    headers: new Headers(),
    body: JSON.stringify({ tittle: tittle, body: body })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  return <div>post bitch</div>;
}
