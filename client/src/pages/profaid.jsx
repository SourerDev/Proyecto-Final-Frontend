import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import SignUp from "./signup/SignUp";




export default function Profile  () {
const dispatch = useDispatch()



  const { user, isAuthenticated, isLoading } = useAuth0();
  dispatch(SignUp(user)) 
  if (isLoading) {
    return <div>Loading...</div>;
  }
  user.user_auth_0 = true
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        {/* <p>{user.user_auth_0 = true}</p> */}

      </div>
    )
  );
};