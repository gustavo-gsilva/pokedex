import styled from "styled-components";
import { useContext } from "react";
import { CustomThemeContext } from "../../context/ThemeContext";

const StyledIcon = styled.img`
   height: 50px;
   cursor: pointer;
   position: absolute;
   right: 1%;
   filter: ${({ theme }) => theme.iconFilter};
`;

function ThemeToggle() {
   const { toggleTheme } = useContext(CustomThemeContext);

   return (
      <div>
         <StyledIcon
            onClick={toggleTheme}
            src="../../../public/assets/images/theme-change-icon.png">
         </StyledIcon>
      </div>
   );
};

export default ThemeToggle;