import { AppProps } from 'next/app';
import clientPromise from '../lib/mongodb';
import { MongoClient } from 'mongodb';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async () => {
  try {
    const client: MongoClient = await clientPromise;
    const db = client.db();
    console.log('Connected to MongoDB:', db.databaseName);
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
  }

  return {};
};

export default MyApp;
