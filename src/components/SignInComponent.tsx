import * as React from "react";
import { ChangeEvent } from "react";
import "../stylesheets/App.css";

interface PropsType {
  onClick: (email: string, password: string) => void;
}

interface StateType {
  email: string;
  password: string;
}

export const SignInComponent = ({ onClick }: PropsType) => {

  const [credentials, setCredentials] = React.useState<StateType>({
    email: "",
    password: "",
  })

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, email: event.target.value });
    event.preventDefault();
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, password: event.target.value });
    event.preventDefault();
  };

  const handleSubmit = () => {
    const { email, password } = credentials;
    onClick(email, password);
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        email:
          <input
          type="text"
          value={credentials.email}
          onChange={handleChangeEmail}
        />
      </label>
      <label>
        password:
          <input
          type="password"
          value={credentials.password}
          onChange={handleChangePassword}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        SIGN IN
      </button>
    </form>
  );

}
