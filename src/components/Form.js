import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const dataHandler = (event) => {
    event.preventDefault();
    if (age.trim().length === 0 || name.trim().length === 0) {
      console.log("Fields Cannot be empty");
      return;
    }
    if (+age < 1) {
      console.log("Age Must Be Greater Than 1");
      return;
    }

    props.items(name, age);
    setName("");
    setAge("");
  };

  const nameHandler = (event) => {
    let name = event.target.value;
    setName(name);
  };
  const ageHandler = (event) => {
    let age = event.target.value;
    setAge(age);
  };
  return (
    <Card>
      <form onSubmit={dataHandler}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={nameHandler}
          name="name"
          id=""
        />
        <br />

        <label htmlFor="age">Age</label>
        <br />
        <input
          type="number"
          value={age}
          onChange={ageHandler}
          name="age"
          id=""
        />
        <br />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Form;
