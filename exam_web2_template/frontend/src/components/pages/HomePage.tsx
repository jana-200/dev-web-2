import { useState, SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { BookContext } from "../../types";

const LoginPage = () => {

   const { loginUser,authenticatedUser,clearUser } : BookContext = useOutletContext();
  
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await loginUser({ username, password });
      navigate("/");
    } catch (err) {
      console.error("LoginPage::error: ", err);
    }
  };
  
    const handleUsernameInputChange = (e: SyntheticEvent) => {
      const input = e.target as HTMLInputElement;
      setUsername(input.value);
    };
  
    const handlePasswordChange = (e: SyntheticEvent) => {
      const input = e.target as HTMLInputElement;
      setPassword(input.value);
    };


    if(authenticatedUser){
      return(
        <div>
          <h2>Home Page </h2>
          <p>welcom , {authenticatedUser.username}</p>
          <button onClick={() => clearUser()}>Log out</button>
        </div>
      );
    }

    return (
      <div>
        <h2>Home Page </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            type="text"
            id="username"
            name="username"
            onChange={handleUsernameInputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="text"
            id="password"
            name="password"
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default LoginPage;