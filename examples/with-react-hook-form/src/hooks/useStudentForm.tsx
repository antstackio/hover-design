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
  const { handleSubmit, control } = useForm<IStudentForm>();
  const onSubmit = (data: IStudentForm) => alert(JSON.stringify(data));

  return { handleSubmit, control, onSubmit };
};
