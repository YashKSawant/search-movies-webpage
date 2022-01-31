import React from 'react';
import Form from './SearchFrom';
import Movies from './Movies';
import { useGlobalContext } from './context';

const Home = () => {
  const data = useGlobalContext();
  console.log(data);
  return (
    <main>
      <h2>home page</h2>

      {/* <Form />
      <Movies /> */}
    </main>
  );
};

export default Home;
