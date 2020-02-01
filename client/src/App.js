import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Feed from "./components/Feed/Feed";
import UploadPage from "./components/UploadPage/UploadPage";
import "./App.css";
import CreateUser from "./components/CreateUser/CreateUser";
import RootContext from "./context/RootContext";
// import AuthenticatedRoute from "./AuthenticatedRoute";

function App() {
  const AuthenticatedRoute = ({ render, ...routeProps }) => {
    const { authenticated } = useContext(RootContext);
    return (
      <Route
        {...routeProps}
        render={() => (authenticated ? render() : <Redirect to='/login' />)}
      />
    );
  };

  return (
    <RootContext>
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
    </RootContext>
  );
}

export default App;
