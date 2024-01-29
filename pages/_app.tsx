// pages/_app.tsx

import { AppProps } from 'next/app';
import React from 'react';
import MongoDB from '../lib/mongodb';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Create MongoDB instance
  const mongoDBInstance = MongoDB.getInstance();

  // Connect to MongoDB on application startup
  React.useEffect(() => {
    const connectToMongoDB = async () => {
      try {
        await mongoDBInstance.connect();
      } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
      }
    };

    connectToMongoDB();


    return () => {
      mongoDBInstance.close();
    };
  }, []);

  return (
  <>
  <Header />
   <Component {...pageProps} />;
  
  <Footer />
  
  </>
  ) 
};

export default App;
