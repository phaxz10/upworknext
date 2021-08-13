import Head from 'next/head';
import React, { useState } from 'react';
import generator from 'generate-password';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [password, setPassword] = useState();

  const handleClick = () => {
    setPassword(
      generator.generate({
        length: 20,
        numbers: true,
        symbols: true,
      })
    );

    axios
      .post('http://localhost:3000/api/passwords', {
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Password Gen App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center space-y-5'>
        <Link href='/list'>
          <p className='hover:font-medium cursor-pointer'>
            List of generated password
          </p>
        </Link>
        <button
          className='p-3 bg-green-400 hover:bg-green-500 text-white rounded-md'
          onClick={handleClick}
        >
          GENERATE
        </button>

        {password && (
          <input
            className='w-56 p-2 text-center'
            type='text'
            value={password}
            readOnly
          />
        )}
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  );
}
