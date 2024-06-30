import React from 'react';
import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import FreedomOfSpeechSection from '../components/FreedomOfSpeechSection';

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<ConnectionStatus> = async () => {
  try {
    const client = await clientPromise;
    return { props: { isConnected: true } };
  } catch (e) {
    console.error(e);
    return { props: { isConnected: false } };
  }
};

export default function Home({ isConnected }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>A place to share my thoughts and experiences</h1>
      <FreedomOfSpeechSection />
    </div>
  );
}
