import React, { useContext } from "react";
import HomeNavbar from "../HomeNavbar";
import { useLoginForm } from "../hooks/LoginHook";
import { useHistory } from "react-router-dom";
import { RootContext } from "../../context/RootContext";
import Footer from "../Footer";
import "./Login.css";

function Login() {
  const { setUser, setAuthenticated } = useContext(RootContext);
  // useHistory allows us to push or redireect a user to a component
  let history = useHistory();

  // here we have a function that runs a .fetch api call to our express api /api/users/login
  // this pushes the data to the passport authentication to validate our user
  const onLogin = () => {
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // grabs the response data from our api POST and if the password is correct and the user is authenticated
        // if the customer is successful we set context so that we can keep the user authenticated and their information when posting and loading profile
        if (data.passwordincorrect === "Password incorrect") {
          alert("Incorrect Username or Password");
          console.log("shit failed");
        } else {
          setUser(data);
          setAuthenticated({ authenticated: true });
          theRedirect();
          console.log("passed");
        }
      })
      .catch(err => console.log(err));

    console.log(`User Logged In! Email: ${inputs.email}`);
  };

  const theRedirect = () => {
    // here we use the useHistory hook to push the user to /feed if they login successfully
    history.push("/feed");
  };

  const { inputs, handleInputChange, handleSubmit } = useLoginForm(onLogin);

  return (
    <div>
      <HomeNavbar />
      <div className='login-container'>
        <form onSubmit={handleSubmit}>
          <p className='login-text'>Login</p>
          <div>
            <input
              placeholder='Email'
              type='email'
              name='email'
              onChange={handleInputChange}
              value={inputs.email}
              required
            />
          </div>
          <div>
            <input
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleInputChange}
              value={inputs.password1}
              required
            />
          </div>

          <button type='submit'>Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
