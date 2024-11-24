import { Header } from "../components/header/header";
import { AsidePopularLeagues } from "../components/asidePopularLeagues/asidePopularLeagues.jsx";
import { 
  HomeContainer, 
  MainStyled } from "../styles/home.styles.js";
import { AsideTopTransfers } from "../components/asideTopTransfers/asideTopTransfers.jsx";

const Home = () => {
  return (
    <>
    <Header />
    <HomeContainer>
      <AsidePopularLeagues />
      <MainStyled>
      </MainStyled>
      <AsideTopTransfers />
    </HomeContainer>
    </>
  );
}

export default Home;