import * as React from "react";
import type { ThemeSettings } from "../../lib/types";
import useIsMounted from "../atoms/useIsMounted";

const SettingsContext = React.createContext<ThemeSettings | null>(null);

export const SettingsContextProvider = SettingsContext.Provider;

export const useSettings = () => {
  const context = React.useContext(SettingsContext);
  const isMounted = useIsMounted();
  if (isMounted && context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
