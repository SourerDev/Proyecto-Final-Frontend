import LoginButton from "./login";
import LogoutButton from "./logaud";
import Profile from "./profaid";
import { useAuth0 } from "@auth0/auth0-react";



export default function Prueva() {
    const { isAuthenticated } = useAuth0();
  
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </header>
      </div>
    );
  }
  
  
