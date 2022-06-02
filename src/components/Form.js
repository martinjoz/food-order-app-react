import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
const Form = (props) => {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");

  const nameRef = useRef();
  const ageRef = useRef();

  const dataHandler = (event) => {
    event.preventDefault();
    let age = ageRef.current.value;
    let name = nameRef.current.value;
    if (age.trim().length === 0 || name.trim().length === 0) {
      console.log("Fields Cannot be empty");
      return;
    }
    if (+age < 1) {
      console.log("Age Must Be Greater Than 1");
      return;
    }
    console.log(name + "___--___" + age);
    props.items(name, age);

    // setName("");
    // setAge("");
  };
  // No need of state if you have Refs
  //   const nameHandler = (event) => {
  //     let name = event.target.value;
  //     setName(name);
  //   };
  //   const ageHandler = (event) => {
  //     let age = event.target.value;
  //     setAge(age);
  //   };
  return (
    <Card>
      <form onSubmit={dataHandler}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          //   value={name}
          //   onChange={nameHandler}
          name="name"
          ref={nameRef}
        />
        <br />

        <label htmlFor="age">Age</label>
        <br />
        <input
          type="number"
          //   value={age}
          //   onChange={ageHandler}
          name="age"
          ref={ageRef}
        />
        <br />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Form;
