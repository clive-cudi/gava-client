import { useContext } from 'react';
import { LoadingCtx } from 'context/LoadingCtx';

export function useLoading() {
  const { isLoading, setIsLoading } = useContext(LoadingCtx);

  function toggleLoading() {
    if (isLoading === true) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }

  function startLoading() {
    setIsLoading(true);
  }

  function stopLoading() {
    setIsLoading(false);
  }

  return {
    isLoading,
    toggleLoading,
    startLoading,
    stopLoading
  };
}
