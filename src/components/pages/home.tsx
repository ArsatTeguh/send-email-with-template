'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Tinput } from '@/lib/register';
import Input from '../ui/input';

function HomePage() {
  const { register, handleSubmit, formState: { errors } } = useForm<Tinput>();

  const propsInput = {
    place: 'Masukan Name',
    channel: 'name',
    register,
    errors,
    teks: 'name',
  };

  const onSubmit: SubmitHandler<Tinput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...propsInput} />
      <button type="submit" className="btn btn-outline hover:bg-purple-700 btn-wide shadow-neon ">Wide</button>
    </form>
  );
}

export default HomePage;
