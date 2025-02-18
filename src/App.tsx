import { BrowserRouter, Route, Routes } from "react-router-dom";
import Queue from "./components/pages/suggestions/Queue";
import Resolved from "./components/pages/suggestions/Resolved";
import Pending from "./components/pages/suggestions/Pending";
import LayoutS from "./components/layouts/LayoutS";
import Layout from "./components/layouts/Layout";
import NotFound from "./components/pages/NotFound";
import LayoutHome from "./components/HomePage/LayoutHome";
import Home from "./components/HomePage/Home"; // Make sure you import Ho
import About from "./components/HomePage/About"; // Make sure you import About
import Suggestion from "./components/HomePage/Suggestion"; // Make sure you import Suggestion
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import LoginPage from './components/Login/LoginPage'; // Make sure you import LoginPage'
import RegisterPageAdmin from "./components/Login/RegisterPageAdmin";
import LoginPageAdmin from "./components/Login/LoginPageAdmin";
import { ToastContainer } from "react-toastify";
import SuggestionDetail from "./components/pages/suggestions/SuggestionDetail";

import LayoutTwo from "./components/Admin/LayoutTwo";
import HomeAdmin from "./components/Admin/HomeAdmin";

function App() {
  return (
    <div className="font-inter">
      <BrowserRouter>
        <Routes>
          {/* Routes for the main layout */}
          <Route path="/" element={<LayoutHome />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="suggestion" element={<Suggestion />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="registeradmin" element={<RegisterPageAdmin />} />
            <Route path="loginadmin" element={<LoginPageAdmin />} />
          </Route>

          <Route path="/admin" element={<LayoutTwo />}>
            <Route index element={<HomeAdmin />} />
            {/* <Route path="suggestion" element={<Suggestion />} />
            <Route path="pending" element={<Pending />} />
            <Route path="queue" element={<Queue />} />
            <Route path="resolved" element={<Resolved />} />
            <Route path="mysuggestion" element={<MySuggestion />} /> */}
          
          </Route>

          {/* Routes for the suggestions layout */}
          <Route path="/suggestions" element={<LayoutS />}>
            <Route index element={<Queue />} />
            <Route path="queue">
            <Route path=":suggestionID" element={<SuggestionDetail />} />
            </Route>
            <Route path="pending" element={<Pending />} />
            <Route path="resolved" element={<Resolved />} />
          </Route>


          {/* Messages */}
          <Route path="/messages" element={<Layout />}/>
            
          {/* Groups */}
          <Route path="/groups" element={<Layout />}/>

          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
