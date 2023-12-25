import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import mustache from 'mustache';
import nodemailer from 'nodemailer';
import { splitNameEmail } from '@/lib/splitNameEmail';

const password = process.env.BURNER_PASSWORD;
const myEmail = process.env.PERSONAL_EMAIL;

export async function POST(request: Request) {
  const emailTemplatePath = path.join(
    process.cwd(),
    'src',
    'lib',
    'templateEmail.html',
  );
  const source = fs.readFileSync(emailTemplatePath, 'utf-8');

  try {
    const {
      email, ccEmail, job, media, file,
    } = await request.json();

    const data = {
      penerima: splitNameEmail(email),
      job,
      media,
    };
    const view = mustache.render(source, data);
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: myEmail,
        pass: password,
      },
    });

    const mailOptions = {
      from: myEmail,
      to: email,
      cc: !ccEmail ? myEmail : ccEmail,
      subject: `🚀 ${job} 🚀 - ARSAT TEGUH`,
      html: view,
      attachments: [
        {
          filename: 'Curriculum_Vitae.pdf',
          content: Buffer.from(file.data),
        },
      ],
    };

    const res = await transporter.sendMail(mailOptions);
    if (res.rejected.length > 0) {
      return NextResponse.json({ message: 'Gagal mengirim email' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Berhasil mengirim email' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
