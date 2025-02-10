import { BrowserRouter, Route, Routes } from "react-router-dom";
import Queue from "./components/pages/suggestions/Queue";
import Resolved from "./components/pages/suggestions/Resolved";
import Pending from "./components/pages/suggestions/Pending";
import LayoutS from "./components/layouts/LayoutS";
import Layout from "./components/layouts/Layout";
function App() {
  return (
    <div className="font-inter">
      <BrowserRouter>
        <Routes>
          {/* Suggestions */}
          <Route path="/suggestions" element={<LayoutS />}>
            <Route index element={<Queue />} />
            <Route path="pending" element={<Pending />} />
            <Route path="resolved" element={<Resolved />} />
          </Route>

          {/* Messages */}
          <Route path="/messages" element={<Layout />}/>
            
          {/* Groups */}
          <Route path="/groups" element={<Layout />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
