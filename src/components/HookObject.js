import React, { useState } from "react";

function HookObject() {
  const initialstate = { firstName: "", lastName: "" };
  const [name, setName] = useState(initialstate);
  return (
    <div>
      <h2>HookObject</h2>
      <form>
        <h3>State {JSON.stringify(name)}</h3>
        <input
          type="text"
          value={name.firstName}
          onChange={event =>
            setName({ ...name, firstName: event.target.value })
          }
        />
        <p>First Name {name.firstName}</p>
        <input
          type="text"
          value={name.lastName}
          onChange={event => setName({ ...name, lastName: event.target.value })}
        />
        <p>First Name {name.lastName}</p>
      </form>
    </div>
  );
}

export default HookObject;
