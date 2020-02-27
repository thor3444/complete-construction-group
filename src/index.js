import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Work } from "./pages/Work";
import "./index.css";
import { Footer } from "./components/Footer";
import { NotFound } from "./pages/NotFound";
import { ScrollToTop } from "./util/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/our_work" component={Work} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
