import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
  const onSave = (name, age) => {
    setList((prevList) => {
      return [...prevList, { name, age, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <Form items={onSave} />

      <List users={list} />
    </div>
  );
}

export default App;
