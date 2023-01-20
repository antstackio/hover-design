import { useState } from "react";
import { Button, Flex, Input, Label } from "@hover-design/react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./components/Hero";
import { useForm } from "react-hook-form";
import TextInput from "./components/form-components/text-input/TextInput";
import SubmitButton from "./components/form-components/button-component/SubmitButton";
import { IStudentForm } from "./hooks/useStudentForm";

function App() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IStudentForm>();
  const onSubmit = (data: IStudentForm) => alert(JSON.stringify(data));
  return (
    <div className="App">
      <Hero />
      <div>
        <h4>Form</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection="column" gap={"24px"}>
            <TextInput label="First Name" name="firstName" control={control} />
            <TextInput label="Last Name" name="lastName" control={control} />
            <TextInput label="E-mail" name="email" control={control} />
            <SubmitButton variant="ghost" type="submit">
              Submit
            </SubmitButton>
          </Flex>
        </form>
      </div>
    </div>
  );
}

export default App;
