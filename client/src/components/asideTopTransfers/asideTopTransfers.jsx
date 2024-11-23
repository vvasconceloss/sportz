import SportzImageLogo from '../../assets/sportz.png';
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
  TransferTop } from "./asideTopTransfers.style"

export const AsideTopTransfers = () => {
  return (
    <AsideContainer>
      <AsideTitle>Top Transfers</AsideTitle>
      <AsideTransfers>
        <Transfer>
          <TransferTop>
            <PlayerImage src={SportzImageLogo} />
            <TransferInfo>
              <PlayerDetails>Lionel Messi</PlayerDetails>
              </TransferInfo>
          </TransferTop>
          <PlayerTransferInfo>
              <PlayerDetails>€50.00M</PlayerDetails>
              <div className="club-images">
                <PlayerClubLogo src={SportzImageLogo} />
                <PlayerClubLogo src={SportzImageLogo} />
              </div>
            </PlayerTransferInfo>
        </Transfer>
      </AsideTransfers>
    </AsideContainer>
  )
}