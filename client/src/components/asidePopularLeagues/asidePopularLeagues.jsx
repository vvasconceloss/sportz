import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  AsideContainer, 
  AsideLeagues, 
  AsideTitle, 
  League, 
  LeagueImage, 
  LeagueTitle, 
  LinkStyled } from "./asidePopularLeagues.styles.js";
import { getPopularLeagues } from '../../services/leaguesApi.js';

export const AsidePopularLeagues = () => {
  const [popularLeagues, setPopularLeagues] = useState([]);

  const definePopularLeagues = async () => {
    const responseData = await getPopularLeagues();
    setPopularLeagues(responseData.leagues);
  }

  useEffect(() => {
    definePopularLeagues();
  }, [])

  return (
    <AsideContainer>
      <AsideTitle>Popular Leagues</AsideTitle>
      <AsideLeagues>
        {
          popularLeagues?.map((league) => (
            <Link className={LinkStyled()} to={'/'} key={league.id}>
              <League>
                <LeagueImage src={league.logo} />
                <LeagueTitle>{league.name}</LeagueTitle>
              </League>
            </Link>
          ))
        }
      </AsideLeagues>
    </AsideContainer>
  );
}