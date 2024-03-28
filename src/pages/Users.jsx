import React,{useEffect} from 'react';
import Userinfo from '../components/userinfo';
import Status from '../components/status';
import Iconsprofile from '../components/iconsprofile';
import Usersmobile from '../components/usersmobile';

function Users() {
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
        <div className="users">  
            <Iconsprofile />
            <div className="users-container">
                <Userinfo />
                <Status />
            </div>
            <div className="users-container-small-screen">
                <Usersmobile />
            </div>
        </div>
    );
}

export default Users;
