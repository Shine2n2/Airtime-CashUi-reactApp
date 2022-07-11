import Registration from "./components/registrationUI/Registration";
import Login from "./components/loginUI/Login";
import "./index.css";
import './Styles.css'
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import ResetPassword from "./components/resetPasswordUI/ResetPassword";
import CheckEmail from "./components/checkEmail/CheckEmail";
import HomePage from "./components/homePage/HomePage";
import Dashboard from "./components/services/Dashboard";
import ManageBank from "./components/services/ManageBank";
import ManageCard from "./components/services/ManageCard";
import ProfileSettings from "./components/services/ProfileSettings";
import TransactionHistory from './components/services/TransactionHistory';
import Withdraw from "./components/services/Withdraw";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgotPassword" element={<ForgetPassword />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="checkEmail" element={<CheckEmail />} />
          <Route path="dashBoard" element={<Dashboard />} />
          <Route path="manageBank" element={<ManageBank/>} />
          <Route path="manageCard" element={<ManageCard/>} />
          <Route path="profileSettings" element={<ProfileSettings />} />
          <Route path="transactionHistory" element={<TransactionHistory />} />
          <Route path="withdraw" element={<Withdraw/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
