import { useState } from "react";
import { Flex, Input, Label } from "@hover-design/react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./components/Hero";
import { useForm } from "react-hook-form";
import TextInput from "./components/form-components/text-input/TextInput";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="App">
      <Hero />
      <div>
        <h4>Form</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection="column">
            <TextInput label="First Name" name="firstName" control={control} />
          </Flex>
        </form>
      </div>
    </div>
  );
}

export default App;
