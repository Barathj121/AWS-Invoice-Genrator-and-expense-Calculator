import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Input from '../components/input';
import Icons from '../components/icons';

const Home = () => {
  const [data, setData] = useState(null);

  return (
    <div className="home">
      <Icons />
      <div className="home-container"> 
        <Input data={data} />
        <Sidebar setData={setData} />
      </div>
    </div>
  );
}

export default Home;