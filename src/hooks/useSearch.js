import React from 'react';
import { SearchCtx } from 'context/SearchCtx';

export function useSearch() {
  const { search, setSearch } = React.useContext(SearchCtx);

  function updateSearchValue(newValue) {
    setSearch((prev) => {
      return {
        ...prev,
        value: newValue
      };
    });
  }

  function registerEvent(ev) {
    const validEvents = ['submit', 'change'];

    if (validEvents.includes(ev)) {
      setSearch((prev) => {
        return {
          ...prev,
          evSubscription: ev
        };
      });
    }
  }

  function deregisterCurrentEvent(ev) {
    const validEvents = ['submit', 'change'];

    if (validEvents.includes(ev) && ev === search.evSubscription) {
      setSearch((prev) => {
        return {
          ...prev,
          evSubscription: null
        };
      });
    }
  }

  function deregisterAllEvents() {
    setSearch((prev) => {
      return {
        ...prev,
        evSubscription: null
      };
    });
  }

  return {
    search,
    updateSearchValue,
    registerEvent,
    deregisterAllEvents,
    deregisterCurrentEvent
  };
}
