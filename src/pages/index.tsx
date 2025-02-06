import Head from 'next/head';
import '../styles/globals.css';
import {Form} from '@/components/Form';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Payments</title>
        <meta name="description" content="Next Payments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full p-7">
        <Form />
      </main>
    </>
  );
}
