import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
   background: "radial-gradient(circle at top, #fce43b 0%, #ff6666 100%)"
};

const darkTheme = {
   background: "radial-gradient(circle at top, #d4a62c 0%, #2a0f2f 100%)"
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