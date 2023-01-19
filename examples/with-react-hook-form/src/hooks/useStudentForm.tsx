import { useForm } from "react-hook-form";

export interface IOptionType {
  label: string;
  value: string;
}

export interface IStudentForm {
  firstName: string;
  lastName: string;
  email: string;
  branch: IOptionType;
}
export const useStudentForm = () => {
  const { control, formState } = useForm<IStudentForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      branch: { label: "", value: "" }
    }
  });
};
