import React, { useState } from 'react';

const Login = props => {
  const [credentials, setCredentials] = useState({email: "", password: ""});

  // Look into this more and find other ways of user authentication
  const handleFieldChange = e => {
    const stateToChange = { ...credentials };
    stateToChange[e.target.id] = e.target.value;
    setCredentials(stateToChange);
  }

  const handleLogin = e => {
    e.preventDefault();
    props.setUser(credentials)
    props.history.push("/");
  }

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please Sign In</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email" id="email" placeholder="Email Address" required="" autoFocus="" />
          <label htmlFor="inputEmail">Email address</label>

          <input onChange={handleFieldChange} type="password" id="password"  placeholder="Password" required="" />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign In</button>
      </fieldset>
    </form>
  );
};

export default Login;
