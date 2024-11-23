import { css } from '@stitches/core';
import { styled } from '@stitches/react';
import { theme } from '../../styles/theme';

export const DefaultContainer = styled('div', {
  width: '100%',
  display: 'flex',
  padding: '0.5rem',
  alignItems: 'center',
});

export const HeaderStyled = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  padding: '1.0rem 1.5rem',
  justifyContent: 'center',
  borderBottom: `0.1rem solid ${theme.colors.blackTwo}`,
});

export const HeaderLogoContainer = styled('div', {
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
});

export const SportzLogo= styled('img', {
  width: '3.0rem',
  height: '3.0rem',
  marginRight: '0.5rem'
});

export const HeaderTitle = styled('h1', {
  fontSize: '2.0rem',
  fontWeight: 'normal',
  color: theme.colors.text
});

export const HeaderLinkNav = styled('nav', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LinkStyled = css({
  padding: '0 1.0rem',
  margin: '0 1.0rem',
  fontSize: '1.2rem',
  textDecoration: 'none',
  color: theme.colors.text,
  transition: '.5s ease all',
  borderBottom: `0.1rem solid transparent`,
  '&:hover': {
    transition: '.5s ease all',
    color: theme.colors.primary,
    borderBottom: `0.1rem solid ${theme.colors.primary}`,
  }
});