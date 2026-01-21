import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/navigation/navigation.component";
import About from "./routes/about/about";
import Contact from "./routes/contact/contact";
import Home from "./routes/home/home.component";
import Menu from "./routes/menu/menu";
import InProgress from "./routes/inprogress/InProgress";
import Catering from "./routes/catering/catering.component";

function App() {
  return (
    // allows applciation to register the route level components that will render certain eleelmtnsat certain paths
    // anything that is going to be routable needs to be inside routes
    <div className="App bg-brand-cream ">
      <BrowserRouter>
        <Routes>
          {/* by having the home route render navigation, itll keep the navbar on all pages and persistent */}
          <Route path="/" element={<Navigation />}>
            <Route index={true} element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about-page" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="catering" element={<Catering />} />
            {/* path will match the parent so only shows home component on the home page */}
            {/* <Route index={true} element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} /> */}
            <Route path="*" element={<InProgress />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
