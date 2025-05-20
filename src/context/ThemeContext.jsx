import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
   textColor: "#000",
   background: "radial-gradient(circle at top, #E8F5E9 0%, #A5D6A7 70%)",
   backgroundPokemonList: "radial-gradient(circle at top, #CFD8DC 0%, #90A4AE 70%)",
   backgroundPokemonImage: "radial-gradient(circle at top, #F1F4F6 0%, #C1CDD2 70%)"
};

const darkTheme = {
   textColor: "#fff",
   background: "radial-gradient(circle at top, #263238 0%, #37474F 100%)",
   iconFilter: "invert(100%)",
   borderIcon: "#fff",
   backgroundPokemonList: "radial-gradient(circle at top, #2A2A2A 0%, #121212 80%)",
   backgroundPokemonImage: "radial-gradient(circle at top, #3A3A3A 0%, #121212 80%)"
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