import React, { useState } from "react";

export default function Comment() {
  const [show, toggleShow] = useState(false);

  return (
    <div>
      <button onClick={() => toggleShow(!show)}>Comment</button>
      {show && (
        <div>
          <div>User:</div>
          <input type='text'></input>{" "}
        </div>
      )}
    </div>
  );
}
