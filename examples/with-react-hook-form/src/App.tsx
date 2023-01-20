import { Flex } from "@hover-design/react";
import "./App.css";
import Hero from "./components/Hero";

import TextInput from "./components/form-components/text-input/TextInput";
import SubmitButton from "./components/form-components/button-component/SubmitButton";
import { useStudentForm } from "./hooks/useStudentForm";

function App() {
  const { handleSubmit, control, onSubmit } = useStudentForm();
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
