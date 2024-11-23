import { Header } from "../components/header/header";
import { AsidePopularLeagues } from "../components/asidePopularLeagues/asidePopularLeagues.jsx";
import { 
  HomeContainer, 
  MainStyled } from "../styles/home.styles.js";

const Home = () => {
  return (
    <>
    <Header />
    <HomeContainer>
      <AsidePopularLeagues />
      <MainStyled>
      </MainStyled>
    </HomeContainer>
    </>
  );
}

export default Home;