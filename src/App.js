import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

function App() {
  return (
     // allows applciation to register the route level components that will render certain eleelmtnsat certain paths
    // anything that is going to be routable needs to be inside routes
    <BrowserRouter>

    <Routes>
      {/* by having the home route render navigation, itll keep the navbar on all pages and persistent */}
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        {/* path will match the parent so only shows home component on the home page */}
        {/* <Route index={true} element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} /> */}
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
