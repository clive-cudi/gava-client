import { createContext, useState } from 'react';

export const SearchCtx = createContext(null);

const contextInitializer = {
  onSubmit: (ev) => {},
  onChange: (ev) => {},
  value: '',
  evSubscription: null
};

export const SearchCtxProvider = ({ children }) => {
  const [search, setSearch] = useState({ ...contextInitializer });

  return <SearchCtx.Provider value={{ search, setSearch }}>{children}</SearchCtx.Provider>;
};
