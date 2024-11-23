import { css } from '@stitches/core';
import { styled } from '@stitches/react';
import { theme } from '../../styles/theme';

export const AsideContainer = styled('aside', {
  width: '20rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '1.0rem 2.0rem',
  borderRight: `0.1rem solid ${theme.colors.blackTwo}`
});

export const AsideTitle = styled('h2', {
  fontWeight: 'normal',
  color: theme.colors.text
});

export const AsideLeagues = styled('div', {
  display: 'flex',
  marginTop: '1.0rem',
  flexDirection: 'column'
});

export const League = styled('div', {
  display: 'flex',
  padding: '0.5rem',
  margin: '1.0rem 0',
  alignItems: 'center',
  transform: 'scale(1)',
  transition: '.5s ease all',
  borderRadius: '0.5rem',
  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.1)',
    backgroundColor: theme.colors.blackTwo
  }
});

export const LeagueTitle = styled('h3', {
  fontWeight: 'normal',
  color: theme.colors.text
});

export const LeagueImage = styled('img', {
  width: '2.5rem',
  height: '2.5rem',
  marginRight: '0.5rem',
});

export const LinkStyled = css({ textDecoration: 'none' });