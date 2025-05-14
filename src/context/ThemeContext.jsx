import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
   background: "radial-gradient(circle at top, #E8F5E9 0%, #A5D6A7 70%)"
};

const darkTheme = {
   background: "radial-gradient(circle at top, #263238 0%, #37474F 100%)",
   iconFilter: "invert(100%)"
};

export const CustomThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState("light");

   const toggleTheme = () => {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
   };

   const setCustomTheme = (newTheme) => {
      setTheme(newTheme);
   };

   return (
      <CustomThemeContext.Provider value={{ theme, toggleTheme, setCustomTheme }}>
         <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            {children}
         </ThemeProvider>
      </CustomThemeContext.Provider>
   );
};