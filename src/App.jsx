import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, LogoutButton } from "./components/LogButtons";
import { Profile } from "./components/profile";
import "./App.css";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>loading ...</div>
  }
  else {
    return (
      isAuthenticated ?
        <div className="">

          <LogoutButton />
          <Profile />
        </div>
        : <LoginButton />

    );
  }
}

export default App;
