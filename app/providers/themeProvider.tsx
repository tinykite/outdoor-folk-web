// // import { createContext, useContext, useState } from "react";
// // import type { ReactNode } from "react";

// // // const getInitialTheme = () => {
// // //   const persistedColorPreference = window.localStorage.getItem("color-mode");
// // //   const hasPersistedPreference = typeof persistedColorPreference === "string";
// // //   // If the user has explicitly chosen light or dark,
// // //   // let's use it. Otherwise, this value will be null.
// // //   if (hasPersistedPreference) {
// // //     return persistedColorPreference;
// // //   }
// // //   // If they haven't been explicit, let's check the media
// // //   // query
// // //   const mql = window.matchMedia("(prefers-color-scheme: dark)");
// // //   const hasMediaQueryPreference = typeof mql.matches === "boolean";
// // //   if (hasMediaQueryPreference) {
// // //     return mql.matches ? "dark" : "light";
// // //   }
// // //   // If they are using a browser/OS that doesn't support
// // //   // color themes, let's default to 'light'.
// // //   return "dark";
// // // };

// // // We'll write types later!
// // const ThemeContext = createContext<any>(undefined);

// // const ThemeProvider = ({ children }: { children: ReactNode }) => {
// //   const [theme, rawSetTheme] = useState(null);

// //   const setTheme = (value: any) => {
// //     rawSetTheme(value);
// //     // Persist it on update
// //     window.localStorage.setItem("color-mode", value);
// //   };

// //   return (
// //     <ThemeContext.Provider value={{ theme, setTheme }}>
// //       {children}
// //     </ThemeContext.Provider>
// //   );
// // };

// // const useTheme = () => {
// //   const context = useContext(ThemeContext);
// //   if (context === undefined) {
// //     throw new Error("useTheme must be used within a ThemeProvider");
// //   }
// //   return context;
// // };

// // export { ThemeProvider, useTheme };

// import { createContext, useContext, useState, useEffect, useMemo } from "react";
// import {
//   COLORS,
//   COLOR_MODE_KEY,
//   INITIAL_COLOR_MODE_CSS_PROP,
// } from "~/constants/colors";

// // We'll write types later!
// const ThemeContext = createContext(null);

// const ThemeProvider = ({ children }) => {
//   const [colorMode, rawSetColorMode] = useState(undefined);

//   useEffect(() => {
//     const root = window.document.documentElement;

//     // A lot of the work for these initial values come from inline script injection in root.tsx
//     const initialColorValue = root.style.getPropertyValue(
//       INITIAL_COLOR_MODE_CSS_PROP
//     );

//     rawSetColorMode(initialColorValue);
//   }, []);

//   const contextValue = useMemo(() => {
//     function setColorMode(newValue) {
//       const root = window.document.documentElement;

//       localStorage.setItem(COLOR_MODE_KEY, newValue);

//       root.className = colorMode;

//       rawSetColorMode(newValue);
//     }

//     return {
//       colorMode,
//       setColorMode,
//     };
//   }, [colorMode, rawSetColorMode]);

//   return (
//     <ThemeContext.Provider value={contextValue}>
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
