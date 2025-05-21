import styled from "styled-components";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100px;
   padding: 0 70px;

   @media (max-width: 1190px) {

      height: 110px;

   }
`;

const StyledLogo = styled.img`
   width: 180px;

   @media (max-width: 950px) {

      width: 190px;

   }

   @media (max-width: 500px) {

      width: 70px;

   }
`;

function Header() {
   return (
      <HeaderContainer>
         <a href="#" onClick={(e) => e.preventDefault()}>
            <picture>
               <source
                  srcSet="/assets/images/pokebola-logo.png"
                  media="(max-width: 500px)"
               />
               <StyledLogo src="/assets/images/logo.svg" alt="Pokédex Logo" />
            </picture>
         </a>
         <ThemeToggle />
      </HeaderContainer>
   );
};

export default Header;