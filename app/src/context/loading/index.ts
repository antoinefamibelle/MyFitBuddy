import { createContext } from "react";

export const LoadingContext = createContext({
    loading: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setLoading: (loading: boolean) => {},
});