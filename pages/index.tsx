import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<ConnectionStatus> = async () => {
  try {
    await clientPromise;
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
      <h1>Welcome to In My Opinion</h1>
      {isConnected ? (
        <h2>You are connected to MongoDB</h2>
      ) : (
        <h2>You are NOT connected to MongoDB.</h2>
      )}
     
    </div>
  );
}
