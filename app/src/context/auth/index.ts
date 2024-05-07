import { UserAuthRo } from "@/lib/types";
import { createContext } from "react";

export const AuthContext = createContext({
  user: null as UserAuthRo | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (user: UserAuthRo | null) => {},
});