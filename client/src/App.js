import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Feed from "./components/Feed/Feed";
import UploadPage from "./components/UploadPage/UploadPage";
import "./App.css";
import CreateUser from "./components/CreateUser/CreateUser";
import RootContext from "./context/RootContext";
import Profile from "./components/Profile/Profile";
import { AuthenticatedRoute } from "./AuthenticateRoute";
import ProfileCard from "./components/Profile/ProfileCard";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <RootContext>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} />
          <Route path='/createuser' component={CreateUser} />
          <Route path='/aboutme' component={ProfileCard} />
          <AuthenticatedRoute>
            <Route path='/user' component={UserProfile} />
            <Route path='/feed' component={Feed} />
            <Route path='/upload' component={UploadPage} />
            <Route path='/profile' component={Profile} />
          </AuthenticatedRoute>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </RootContext>
  );
}

export default App;
