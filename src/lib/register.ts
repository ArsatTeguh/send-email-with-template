import {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from 'react-hook-form';

export type PropsInput = {
  channel: string;
  teks: string;
  register?: any;
  place: string;
  errors?: any;
  type?: string;
};

export type Tinput = {
  name: string;
  email: string;
};

export type IPropsLogin = {
  register: UseFormRegister<Tinput>;
  errors: FieldErrors<Tinput>;
  handleSubmit: UseFormHandleSubmit<Tinput, undefined>;
};
