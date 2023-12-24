import React from 'react';
import { PropsInput } from '@/lib/register';

function Input(props: PropsInput) {
  const {
    channel,
    teks,
    register,
    place,
    errors,
    require,
  } = props;
  return (
    <div className="flex flex-col w-full  gap-1 relative">
      <div className="flex flex-col w-full  gap-2">
        <label htmlFor={channel} className="text-sm text-white">
          {teks}
        </label>
        {require ? (
          <input
            type="email"
            className={`input input-md  focus:outline-none text-white  ${errors[channel] ? 'input-error' : 'border-purple-700'}`}
            placeholder={place}
            {...register(channel, {
              required: 'Email tidak boleh kosong',
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: '^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$',
                message: 'Invalid email address',
              },
              // validate: {
              //   must5character: (value:string) => (
              //     value.length >= 5 || 'Harus lebih dar 5 caracter'
              //   ),
              // },
            })}
          />
        ) : (
          <input
            type="email"
            className={`input input-md  focus:outline-none text-white  ${errors[channel] ? 'input-error' : 'border-purple-700'}`}
            placeholder={place}
            {...register(channel)}
          />
        )}
      </div>
      <span className="text-red-400 text-[12px]">
        {errors[channel]?.message}
      </span>
    </div>
  );
}

export default Input;
