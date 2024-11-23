import { Link } from 'react-router-dom';
import SportzImageLogo from '../../assets/sportz.png';
import { 
  AsideContainer, 
  AsideLeagues, 
  AsideTitle, 
  League, 
  LeagueImage, 
  LeagueTitle, 
  LinkStyled } from "./asidePopularLeagues.styles.js";

export const AsidePopularLeagues = () => {
  let leagues = ['Champions League', 'LaLiga', 'Bundesliga', 'Premier League', 'Premier League', 'Premier League',  'Premier League'];

  return (
    <AsideContainer>
      <AsideTitle>Popular Leagues</AsideTitle>
      <AsideLeagues>
        {
          leagues.map((league, key) => (
            <Link className={LinkStyled()} to={'/'}>
              <League key={key}>
                <LeagueImage src={SportzImageLogo} />
                <LeagueTitle>{league}</LeagueTitle>
              </League>
            </Link>
          ))
        }
      </AsideLeagues>
    </AsideContainer>
  );
}