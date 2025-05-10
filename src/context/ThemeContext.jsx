import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
   iconFilter: "none",
   background: "#fff"
};

const darkTheme = {
   iconFilter: "invert(100%)",
   background: "#1b1b1b"
};

export const CustomThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
   const [isDarkTheme, setIsDarkTheme] = useState(false);

   const toggleTheme = () => setIsDarkTheme((prev) => !prev);

   const theme = isDarkTheme ? darkTheme : lightTheme;

   return (
      <CustomThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
         <ThemeProvider theme={theme}>
            {children}
         </ThemeProvider>
      </CustomThemeContext.Provider>
   );
};