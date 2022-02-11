import Login from "../screens/signin"
import SignUp from "../screens/signUp";
import Dashboard from "../screens/dashboard";
import PrivateRoute from "./private";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"


function Main() {
  return (
    <Router>   
        <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      }
      />
      </Routes>
    </Router>
  );
}
export default Main;
