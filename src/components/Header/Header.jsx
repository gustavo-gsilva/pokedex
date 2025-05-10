import { useContext } from "react";
import styled from "styled-components";
import { CustomThemeContext } from "../../context/ThemeContext";

const HeaderContainer = styled.header`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${({ theme }) => theme.background};
`;

const StyledLogo = styled.img`
   width: 450px;
`;

const StyledIcon = styled.img`
   height: 50px;
   cursor: pointer;
   position: absolute;
   right: 1%;
   filter: ${({ theme }) => theme.iconFilter};
`;

function Header() {
   const { toggleTheme } = useContext(CustomThemeContext);

   return (
      <HeaderContainer>
         <StyledLogo src="../../../public/assets/images/logo.svg" />
         <StyledIcon
            onClick={toggleTheme}
            src="../../../public/assets/images/theme-change-icon.png"
         />
      </HeaderContainer>
   );
};

export default Header;