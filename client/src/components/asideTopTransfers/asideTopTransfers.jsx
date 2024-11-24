import { useEffect, useState } from 'react';
import { getTopMarketValueTransfer } from '../../services/playersApi';
import { 
  AsideContainer, 
  AsideTitle, 
  AsideTransfers, 
  PlayerClubLogo, 
  PlayerDetails, 
  PlayerImage, 
  PlayerTransferInfo, 
  Transfer, 
  TransferInfo, 
  TransferTop,
  TransferHeader, 
  ClubImages} from "./asideTopTransfers.style"

export const AsideTopTransfers = () => {
  const [topTransfers, setTopTransfers] = useState([]);

  const defineTopTransfers = async () => {
    const responseData = await getTopMarketValueTransfer();
    setTopTransfers(responseData?.transfers);
  }

  useEffect(() => {
    defineTopTransfers();
  }, []);

  return (
    <AsideContainer>
      <AsideTitle>Top Transfers</AsideTitle>
      <AsideTransfers>
        {
          topTransfers?.map((transfer) => (
          <Transfer key={transfer.transfer.playerId}>
            <TransferHeader>
              <PlayerDetails>{transfer.transfer.name}</PlayerDetails>
              <PlayerDetails>{transfer.detail.playerDetails[2].value.numberValue} years old</PlayerDetails>
            </TransferHeader>
            <TransferTop>
              <PlayerImage src={transfer.image.playerImage} />
              <TransferInfo>
                <PlayerDetails>{transfer.transfer.position.label} | {transfer.detail.playerDetails[4].value.fallback}</PlayerDetails>
              </TransferInfo>
            </TransferTop>
            <PlayerTransferInfo>
                <PlayerDetails>{
                  transfer.transfer.fee.value 
                  ? new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'EUR',}).format(transfer.transfer.fee.value) 
                  : transfer.transfer.fee.feeText.toUpperCase()}</PlayerDetails>
                  <ClubImages>
                    <PlayerClubLogo src={transfer.fromClub} />
                    <PlayerClubLogo src={transfer.toClub} />
                  </ClubImages>
            </PlayerTransferInfo>
          </Transfer>
          ))
        }
      </AsideTransfers>
    </AsideContainer>
  )
}