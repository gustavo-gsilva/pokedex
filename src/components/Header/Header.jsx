import styled from "styled-components";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const HeaderContainer = styled.header`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const StyledLogo = styled.img`
   width: 410px;
   margin-top: 25px;
`;

function Header() {
   return (
      <HeaderContainer>
         <StyledLogo src="../../../public/assets/images/logo.svg" />
         <ThemeToggle />
      </HeaderContainer>
   );
};

export default Header;