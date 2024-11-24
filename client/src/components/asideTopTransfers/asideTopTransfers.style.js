import { styled } from '@stitches/react';
import { theme } from '../../styles/theme';

export const AsideContainer = styled('aside', {
  width: '25rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '1.0rem 2.0rem',
  borderLeft: `0.1rem solid ${theme.colors.blackTwo}`
});

export const AsideTitle = styled('h2', {
  fontWeight: 'normal',
  color: theme.colors.text
});

export const AsideTransfers = styled('div', {
  display: 'flex',
  marginTop: '1.0rem',
  flexDirection: 'column'
});

export const Transfer = styled('div', {
  display: 'flex',
  margin: '0.9rem 0',
  borderRadius: '0.5rem',
  flexDirection: 'column',
  backgroundColor: theme.colors.blackTwo,
  borderBottom: `0.2rem solid ${theme.colors.primary}`
});

export const TransferTop = styled('div', {
  display: 'flex',
  padding: '0.5rem',
  alignItems: 'center',
  borderBottom: `0.1rem solid ${theme.colors.primary}`
});

export const TransferHeader = styled('div', {
  display: 'flex',
  padding: '0.5rem',
  alignItems: 'center',
  borderTopLeftRadius: '0.5rem',
  borderTopRightRadius: '0.5rem',
  justifyContent: 'space-between',
  backgroundColor: theme.colors.primary
});

export const TransferInfo = styled('div', {
  display: 'flex',
  margin: '0 0.5rem',
  flexDirection: 'column',
});

export const PlayerImage = styled('img', {
  width: '4.0rem',
  height: '4.0rem',
});

export const PlayerTransferInfo = styled('div', {
  width: '100%',
  display: 'flex',
  padding: '0.5rem',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const PlayerDetails = styled('h3', {
  fontWeight: 'normal',
  color: theme.colors.text,
});

export const PlayerClubLogo = styled('img', {
  width: '2.5rem',
  height: '2.5rem',
});

export const ClubImages = styled('div', {
  display: 'flex',
  alignItems: 'center'
});