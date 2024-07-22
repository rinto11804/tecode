import { create } from "zustand";
import { User } from "../api/types";

interface State {
  user: User;
  isSignIn: boolean;
  setUser: (user: User) => void;
  setSignIn: (state: boolean) => void;
}

export const useAuthStore = create<State>((set) => ({
  user: { email: "", name: "", role: "" },
  isSignIn: false,
  setSignIn: (state: boolean) => set(() => ({ isSignIn: state })),
  setUser: (user: User) => set(() => ({ user: user })),
}));
