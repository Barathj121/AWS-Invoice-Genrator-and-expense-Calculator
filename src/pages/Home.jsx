import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Input from '../components/input';
import Iconshome from '../components/iconshome';

const Home = () => {
  const [data, setData] = useState(null);

  return (
    <div className="home">
      <Iconshome />
      <div className="home-container"> 
        <Input data={data} />
        <Sidebar setData={setData} />
      </div>
    </div>
  );
}

export default Home;