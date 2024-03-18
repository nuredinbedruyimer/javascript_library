import { createContext, ReactNode } from "react";

interface User {
  name: string;
  age: number;
}

export let UserContext = createContext<User | null>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  let user = {
    name: "Name One",
    age: 123,
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
