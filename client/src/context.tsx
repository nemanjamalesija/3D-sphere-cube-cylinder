import React, { createContext, useContext, useState } from 'react';

interface ContextProps {
  randomValue: number;
  setRandomValue: React.Dispatch<React.SetStateAction<number>>;
}

const Context = createContext<ContextProps>({
  randomValue: 2,
  setRandomValue: () => null,
});

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [randomValue, setRandomValue] = useState(2);

  const value = { randomValue, setRandomValue };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useCustomContext = () => useContext(Context);

export { ContextProvider, useCustomContext };
