import { Link } from "react-router-dom";
import SportzImageLogo from '../../assets/sportz.png';
import { 
  DefaultContainer, 
  HeaderLinkNav, 
  HeaderLogoContainer, 
  HeaderStyled, HeaderTitle, 
  LinkStyled, 
  SportzLogo } from './header.styles';

export const Header = () => {
  return (
    <HeaderStyled>
      <DefaultContainer>
        <HeaderLogoContainer>
          <SportzLogo src={SportzImageLogo}></SportzLogo>
          <HeaderTitle>Sportz</HeaderTitle>
        </HeaderLogoContainer>
        <HeaderLinkNav>
          <Link to={'/'} className={LinkStyled()}>Sport</Link>
          <Link to={'/'} className={LinkStyled()}>Live</Link>
          <Link to={'/'} className={LinkStyled()}>News</Link>
          <Link to={'/'} className={LinkStyled()}>Competitions</Link>
        </HeaderLinkNav>
      </DefaultContainer>
    </HeaderStyled>
  );
}