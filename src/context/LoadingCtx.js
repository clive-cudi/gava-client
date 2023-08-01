import { createContext, useState } from 'react';

export const LoadingCtx = createContext(null);

export const LoadingCtxProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return <LoadingCtx.Provider value={{ isLoading, setIsLoading }}>{children}</LoadingCtx.Provider>;
};
