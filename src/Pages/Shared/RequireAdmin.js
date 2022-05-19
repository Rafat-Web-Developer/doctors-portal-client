import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import useAdmin from "../../hooks/useAdmin";
import { signOut } from "firebase/auth";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  // console.log(!admin);
  // console.log(user);

  if (loading || adminLoading) {
    return <Loading></Loading>;
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default RequireAdmin;
