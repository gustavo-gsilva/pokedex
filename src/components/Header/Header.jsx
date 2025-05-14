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
   width: 190px;
   filter: drop-shadow(0 0 4px #0ff) drop-shadow(0 0 5px #0ff);
`;

function Header() {
   return (
      <HeaderContainer>
         <a href="#" onClick={(e) => e.preventDefault()}>
            <StyledLogo src="../../../public/assets/images/logo.svg" />
         </a>
         <ThemeToggle />
      </HeaderContainer>
   );
};

export default Header;