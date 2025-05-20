import styled from "styled-components";
import { useContext, useState } from "react";
import { CustomThemeContext } from "../../context/ThemeContext";

const Theme = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   cursor: pointer;
   background-color: transparent;

   &:hover {
      transition: all 0.3s ease;
      transform: scale(1.04);
   }
`;

const StyledThemeP = styled.p`
   font-weight: 700;
   font-size: 1.5rem;
`;


const ThemeContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background: ${({ theme }) => theme.backgroundPokemonList};
   width: 115px;
   height: 103px;
   position: absolute;
   border-radius: 5px;
   padding: 10px;
   margin-top: 6px;
   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
   opacity: 0;
   transform: translateY(-10px);
   animation: fadeIn 0.3s ease forwards;

   @keyframes fadeIn {
      to {
         opacity: 1;
         transform: translateY(0);
      }
   }
`;

const IconContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   cursor: pointer;
   padding: 8px;
   border-radius: 7px;
   transition: transform 0.2s ease, box-shadow 0.2s ease;

   &:hover {
      background: ${({ theme }) => theme.backgroundPokemonImage};
      transform: scale(1.02);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
   }
`;

const SunIcon = styled.i`
   font-size: 2.3rem;
`;

const MoonIcon = styled.i`
   font-size: 2.3rem;
`;

const LightDarkText = styled.p`
   font-size: 1.5rem;
   font-weight: 600;
`;

function ThemeToggle() {
   const { theme, setCustomTheme } = useContext(CustomThemeContext)
   const [themeVisible, setThemeVisible] = useState(false);

   const handleToggleVisibility = () => {
      setThemeVisible(prev => !prev);
   };

   const handleThemeChange = (newTheme) => {
      setCustomTheme(newTheme);
      setThemeVisible(false);
   };

   const ThemeIcon = theme === "light"
      ? <SunIcon className="fa-solid fa-sun" />
      : <MoonIcon className="fa-solid fa-moon" />

   return (
      <>
         <div>
            <Theme onClick={handleToggleVisibility}>
               {ThemeIcon}
               <StyledThemeP>Theme</StyledThemeP>
            </Theme>

            {themeVisible && (
               <ThemeContainer>
                  <IconContainer onClick={() => handleThemeChange("light")}>
                     <SunIcon className="fa-solid fa-sun" />

                     <LightDarkText>Light</LightDarkText>
                  </IconContainer>

                  <IconContainer onClick={() => handleThemeChange("dark")}>
                     <MoonIcon className="fa-solid fa-moon" />

                     <LightDarkText>Dark</LightDarkText>
                  </IconContainer>
               </ThemeContainer>
            )}
         </div>
      </>
   );
};

export default ThemeToggle;