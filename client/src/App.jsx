// package
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

// style
import "semantic-ui-css/semantic.min.css";
import "./App.css"; // import custom css after semantic ui css can override semantic ui

// context
import { AuthProvider } from "./context/auth";

// component
import MenuBar from "./components/MenuBar";

// page
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Container>
      </Router>
    </AuthProvider>
  );
};

export default App;
