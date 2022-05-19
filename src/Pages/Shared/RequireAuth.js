import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    signOut(auth);
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default RequireAuth;
