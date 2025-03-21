import { createContext, useState } from "react";

export const Mycontext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);

  return (
    <Mycontext.Provider value={{ isHeaderFooterShow, setisHeaderFooterShow }}>
      {children}
    </Mycontext.Provider>
  );
};
