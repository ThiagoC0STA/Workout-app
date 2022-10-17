import React, { createContext, useState, useEffect } from "react";

export const Contexts = createContext<any | null>(null);

export const GlobalContext = ({ children }: any) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  const [width, setWidth] = useState<number>(0);
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (width < 1400) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <Contexts.Provider
      value={{
        mobile,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};
