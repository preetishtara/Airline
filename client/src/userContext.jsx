import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ childern }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {childern}
    </UserContext.Provider>
  );
}
