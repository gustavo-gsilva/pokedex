import styled from "styled-components";
import { useContext, useState } from "react";
import { CustomThemeContext } from "../../context/ThemeContext";

const Theme = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   cursor: pointer;
   background-color: transparent;
   filter: drop-shadow(0 0 6px #0ff) drop-shadow(0 0 12px #0ff);

   &:hover {
      transition: all 0.3s ease;
      transform: scale(1.04);
      filter: drop-shadow(0 0 10px #0ff) drop-shadow(0 0 20px #0ff);
   }
`;

const StyledIcon = styled.img`
   height: 23px;
   cursor: pointer;
   filter: ${({ theme }) => theme.iconFilter};
`;

const StyledThemeP = styled.p`
   font-weight: 700;
   font-size: 1.5rem;

   color: 
   ${({ theme }) => (theme.background === "radial-gradient(circle at top, #E8F5E9 0%, #A5D6A7 70%)" ?
      "#000" : "#fff")};
`;


const ThemeContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background-color: rgba(255, 255, 255, 0.6);
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
      background-color: #ffc266;
      transform: scale(1.03);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
   }
`;

const SunIcon = styled.img`
   height: 23px;
`;

const MoonIcon = styled.img`
   height: 23px;
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

   const iconSrc = theme === "light"
      ? "../../../public/assets/images/sun-icon.png"
      : "../../../public/assets/images/moon-icon.png"

   return (
      <>
         <div>
            <Theme onClick={handleToggleVisibility}>
               <StyledIcon src={iconSrc} />

               <StyledThemeP>Theme</StyledThemeP>
            </Theme>

            {themeVisible && (
               <ThemeContainer>
                  <IconContainer onClick={() => handleThemeChange("light")}>
                     <SunIcon src="../../../public/assets/images/sun-icon.png" />

                     <LightDarkText>Light</LightDarkText>
                  </IconContainer>

                  <IconContainer onClick={() => handleThemeChange("dark")}>
                     <MoonIcon src="../../../public/assets/images/moon-icon.png" />

                     <LightDarkText>Dark</LightDarkText>
                  </IconContainer>
               </ThemeContainer>
            )}
         </div>
      </>
   );
};

export default ThemeToggle;