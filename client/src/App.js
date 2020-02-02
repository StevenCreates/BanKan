import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Feed from "./components/Feed/Feed";
import UploadPage from "./components/UploadPage/UploadPage";
import "./App.css";
import CreateUser from "./components/CreateUser/CreateUser";
import RootContext from "./context/RootContext";
import { AuthenticatedRoute } from "./AuthenticateRoute";
// import AuthenticatedRoute from "./AuthenticatedRoute";

function App() {
  return (
    <RootContext>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} />
          <AuthenticatedRoute path='/feed' component={Feed} />
          <Route path='/upload' component={UploadPage} />
          <Route path='/createuser' component={CreateUser} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </RootContext>
  );
}

export default App;
