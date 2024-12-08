'use client';

import React, { ChangeEvent, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Tinput } from '@/lib/register';
import { fileToBuffer } from '@/lib/buffer';
import Input from '../ui/input';
import LoadingRocket from '../ui/loadingRocket';

function HomePage() {
  const [err, setErr] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setloading] = useState(false);

  const {
    register,
    handleSubmit, control, formState: { errors },
  } = useForm<Tinput>({
    defaultValues: {
      email: '',
      ccEmail: '',
      job: 'Front End Developer',
      media: 'Facebook',
    },
  });

  const inputEmail = {
    place: 'masukan email tujuan',
    channel: 'email',
    register,
    errors,
    teks: 'Email Tujuan',
    require: true,
  };
  const inputCcEmail = {
    place: 'masukan email cc',
    channel: 'ccEmail',
    register,
    errors,
    teks: 'CC Email',
    require: false,
  };

  const onSubmit: SubmitHandler<Tinput> = async (data) => {
    setloading(true);
    try {
      const buffer = await fileToBuffer(data.file as File);
      data.file = buffer;
      const res = await fetch('/api', {
        method: 'POST',
        body: JSON.stringify({ ...data }),
      });
      const { message } = await res.json();
      if (res.ok) {
        setStatus(message);
        setErr(false);
      } else {
        setErr(true);
        setStatus(message);
      }
    } catch (error: any) {
      setErr(true);
      setStatus(error.message);
    } finally {
      setloading(false);
    }

    const time = setTimeout(() => setStatus(null), 3000);
    return () => clearTimeout(time);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/3 sm:w-5/6 w-full h-full py-8 grid sm:p-8 p-3 place-items-center gap-4 border border-purple-500 rounded-md relative">
      <LoadingRocket isLoading={loading} />
      {status && (
        <div role="alert" className={`alert flex items-center border-none fixed top-5 md:w-1/2 w-5/6 right-3 z-10 text-white font-medium ${!err ? 'shadow-neon bg-purple-800 ' : 'alert-error'}`}>
          <span> {status} </span>
        </div>
      )}

      <div className="text-base text-justify text-yellow-500 flex flex-col gap-2">وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوْعِ وَنَقْصٍ مِّنَ  الْاَمْوَالِ وَالْاَنْفُسِ وَالثَّمَرٰتِۗ وَبَشِّرِ الصّٰبِرِيْنَ
        <br />
        <p className="text-sm text-justify mt-1 mb-2 text-slate-100"> Dan Kami pasti akan menguji kamu dengan sedikit ketakutan, kelaparan, kekurangan harta, jiwa, dan buah-buahan. Dan sampaikanlah kabar gembira kepada orang-orang yang sabar, {' '}
          <span className="text-yellow-500">
            (Surah: Al-Baqarah 155)
          </span>
        </p>
      </div>
      <Input {...inputEmail} />
      <Input {...inputCcEmail} />
      <label htmlFor="job" className="form-control w-full ">
        <div className="label">
          <span className="label-text text-white">Pilih Posisi </span>
        </div>
        <select
          id="job"
          className="select text-white select-bordered focus:outline-none border-purple-700"
          {...register('job')}
        >
          <option value="Front End Developer">Front End Developer</option>
          <option value="React Js Developer">React Js Developer</option>
          <option value="Front End Enginer">Front End Enginer</option>
          <option value="Fullstack Javascript">Fullstack Javascript</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
          <option value="Backend Node js Developer">Backend Node js Developer</option>
          <option value="Node js Developer">Node js Developer</option>
          <option value="Backend Enginer">Backend Enginer</option>
          <option value="Next Js Developer">Next Js Developer</option>
          <option value="IT Programmer">IT Programmer</option>
          <option value="Backend Golang">Backend Golang</option>
          <option value="Golang Developer">Golang Developer</option>
        </select>
      </label>
      <label htmlFor="job" className="form-control w-full ">
        <div className="label">
          <span className="label-text text-white">Pilih Media</span>
        </div>
        <select
          id="job"
          className="select text-white select-bordered focus:outline-none   border-purple-700"
          {...register('media')}
        >
          <option value="Facebook">Facebook</option>
          <option value="Linkedin">Linkedin</option>
          <option value="Instagram">Instagram</option>
          <option value="Telegram">Telegram</option>
        </select>
      </label>
      <label htmlFor="file" className="form-control w-full  ">
        <div className="label">
          <span className="label-text text-white">Curriculum Vitae</span>
        </div>
        <Controller
          name="file"
          control={control}
          rules={{ required: 'File tidak boleh kosong' }}
          render={({ field }) => (
            <input
              id="file"
              type="file"
              className={`file-input focus:outline-none text-white file-input-bordered w-full ${errors?.file ? 'border-red-500' : 'border-purple-700'}`}
              onChange={(e: ChangeEvent<HTMLInputElement>) => field.onChange(e?.target?.files![0])}
              accept="application/pdf"
            />
          )}
        />
        <div className="label">
          {errors.file ? (
            <span className="label-text-alt text-red-400"> {errors?.file.message} </span>
          ) : (
            <span className="label-text-alt text-white">Nb: File harus format PDF</span>
          )}
        </div>
      </label>
      <button disabled={loading} type="submit" className="btn text-white mt-2 btn-outline w-full hover:bg-purple-700  shadow-neon border-purple-500  ">Send Email</button>
    </form>
  );
}

export default HomePage;
