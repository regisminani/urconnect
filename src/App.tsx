import { BrowserRouter, Route, Routes } from "react-router-dom";
import Queue from "./components/pages/suggestions/Queue";
import Resolved from "./components/pages/suggestions/Resolved";
import Pending from "./components/pages/suggestions/Pending";
import LayoutS from "./components/layouts/LayoutS";
import Layout from "./components/layouts/Layout";
import NotFound from "./components/pages/NotFound";
import LayoutHome from "./components/HomePage/LayoutHome";
import Home from "./components/HomePage/Home"; // Make sure you import Home
import About from "./components/HomePage/About"; // Make sure you import About
import Suggestion from "./components/HomePage/Suggestion"; // Make sure you import Suggestion
import LoginPage from './components/Login/LoginPage'; // Make sure you import LoginPage'
import LoginPageAdmin from "./components/Login/LoginPageAdmin";

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
            <Route path="loginadmin" element={<LoginPageAdmin />} />
          </Route>

          {/* Routes for the suggestions layout */}
          <Route path="/suggestions" element={<LayoutS />}>
            <Route index element={<Queue />} />
            <Route path="pending" element={<Pending />} />
            <Route path="resolved" element={<Resolved />} />
          </Route>


          {/* Messages */}
          <Route path="/messages" element={<Layout />}/>
            
          {/* Groups */}
          <Route path="/groups" element={<Layout />}/>

          <Route path="*" element={<NotFound />} />
          {/* Messages and Groups routes */}
          <Route path="/messages" element={<Layout />} />
          <Route path="/groups" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
