// import { createContext, useContext, useState } from "react";
// import type { ReactNode } from "react";

// const getInitialTheme = () => {
//   const persistedColorPreference = window.localStorage.getItem("color-mode");
//   const hasPersistedPreference = typeof persistedColorPreference === "string";
//   // If the user has explicitly chosen light or dark,
//   // let's use it. Otherwise, this value will be null.
//   if (hasPersistedPreference) {
//     return persistedColorPreference;
//   }
//   // If they haven't been explicit, let's check the media
//   // query
//   const mql = window.matchMedia("(prefers-color-scheme: dark)");
//   const hasMediaQueryPreference = typeof mql.matches === "boolean";
//   if (hasMediaQueryPreference) {
//     return mql.matches ? "dark" : "light";
//   }
//   // If they are using a browser/OS that doesn't support
//   // color themes, let's default to 'light'.
//   return "dark";
// };

// // We'll write types later!
// const ThemeContext = createContext<any>(undefined);

// const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, rawSetTheme] = useState(getInitialTheme);

//   const setTheme = (value: any) => {
//     rawSetTheme(value);
//     // Persist it on update
//     window.localStorage.setItem("color-mode", value);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };

// export { ThemeProvider, useTheme };
