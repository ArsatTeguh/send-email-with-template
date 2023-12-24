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
  require: boolean
};

export type Tinput = {
  email: string;
  ccEmail: string;
  job: string;
  media: string;
  file: File | Blob | string | Buffer;
};

export type IPropsLogin = {
  register: UseFormRegister<Tinput>;
  errors: FieldErrors<Tinput>;
  handleSubmit: UseFormHandleSubmit<Tinput, undefined>;
};
