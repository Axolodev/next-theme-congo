import * as React from "react";
import type { ThemeSettings } from "../../lib/types";

const SettingsContext = React.createContext<ThemeSettings | null>(null);

export const SettingsContextProvider = SettingsContext.Provider;

export const useSettingsContext = () => {
  const context = React.useContext(SettingsContext);
  if (context === undefined) {
    throw new Error(
      "useSettingsContext must be used within a SettingsProvider"
    );
  }
  return context;
};
