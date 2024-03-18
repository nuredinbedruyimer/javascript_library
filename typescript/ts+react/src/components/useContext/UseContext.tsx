import { createContext } from "react";

interface AuthContextType {
  isAuthenticated: string;
  login: () => boolean;
  logout: () => boolean;
}

// Provide a default value for the context
const defaultAuthContext: AuthContextType = {
  isAuthenticated: "UnAuthenticated",
  login: () => false,
  logout: () => true,
};

let UserContext = createContext(defaultAuthContext);

export const UserProvider = ({ children }: { children: any }) => {
  const user: AuthContextType = {
    isAuthenticated: "Authenticated Message",
    login() {
      return true;
    },
    logout() {
      return false;
    },
  };
  return <UserContext.Provider value={user}> {children}</UserContext.Provider>;
};

export const UserProfile = () => (
  <UserContext.Consumer>
    {(user) => (
      <div>
        <h1>{user.isAuthenticated}</h1>
      </div>
    )}
  </UserContext.Consumer>
);
