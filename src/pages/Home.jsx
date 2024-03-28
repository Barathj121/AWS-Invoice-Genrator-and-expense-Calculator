import React, { useState,useEffect } from 'react';
import Sidebar from '../components/sidebar';
import Input from '../components/input';
import Iconshome from '../components/iconshome';

const Home = () => {
  const [data, setData] = useState(null);

  const getUser = async() =>{
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("LoginToken")
        }
      };
  
      const userIDresp = await fetch("https://login-backend-m1qk.onrender.com/api/users/me", requestOptions);
      const userID = await userIDresp.json();
      console.log(userID);
  
    };
    useEffect(()=> {
        getUser();
      },[]);

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