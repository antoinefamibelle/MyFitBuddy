import { UserAuthRo } from "@/lib/types";
import { createContext } from "react";

export const AuthContext = createContext({
  user: null as UserAuthRo | null,
  setUser: (user: UserAuthRo | null) => {},
});