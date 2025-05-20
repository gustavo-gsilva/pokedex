import styled from "styled-components";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100px;
   padding: 0 70px;
`;

const StyledLogo = styled.img`
   width: 180px;
`;

function Header() {
   return (
      <HeaderContainer>
         <a href="#" onClick={(e) => e.preventDefault()}>
            <StyledLogo src="/assets/images/logo.svg" alt="Pokédex Logo" />
         </a>
         <ThemeToggle />
      </HeaderContainer>
   );
};

export default Header;