import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Feed from "./components/Feed/Feed";
import UploadPage from "./components/UploadPage/UploadPage";
import "./App.css";
import CreateUser from "./components/CreateUser/CreateUser";
export const AppContext = React.createContext();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/feed' component={Feed} />
        <Route path='/upload' component={UploadPage} />
        <Route path='/createuser' component={CreateUser} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
