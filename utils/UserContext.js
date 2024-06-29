import { createContext } from "react";

const UserContext = createContext({
  loggedUser: "Test user 1",
});

export default UserContext;
