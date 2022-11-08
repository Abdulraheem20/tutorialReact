import React, { createContext, useState } from "react";
import Logi from "./Logi";
import Users from "./Users";

export const AppContext = createContext(null);

const ContextHook = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <AppContext.Provider value={{ username, setUsername }}>
        <Logi username={username} />
        <Users />
      </AppContext.Provider>
    </div>
  );
};

export default ContextHook;
