import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}: any) {


const auth = localStorage.getItem("accessToken")
  return (
     auth? children : <Navigate to="/"/>
  );
}
