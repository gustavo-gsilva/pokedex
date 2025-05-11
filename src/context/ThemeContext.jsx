import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
   iconFilter: "none",
   background: "radial-gradient(circle at top, #fce43b 0%, #ff6666 100%)"
};

const darkTheme = {
   iconFilter: "invert(100%)",
   background: "radial-gradient(circle at top, #d4a62c 0%, #2a0f2f 100%)"
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