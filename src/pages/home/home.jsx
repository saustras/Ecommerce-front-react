
import { BarTrust, Separator, BannerAd } from '@/component/Shared'
import { BannerLastGamePublished, LatestGames } from '@/component/home'
import { BasicLayout } from '@/layouts'
import { Container } from 'semantic-ui-react'

const platformId = {
  xbox:2,
  switch:3,
  pc:1,
  playstation:4
}


export default function home() {
  return (
    <BasicLayout>
        <BannerLastGamePublished />
        <Separator height={100} />

        <Container>
        <LatestGames title = "Ultimos lanzamientos" />
        </Container>

        <Separator height={100} />
        <BarTrust />
        <Separator height={100} />

        <Container>
          <LatestGames title = "PlayStation" limit ={3} platformId ={platformId.playstation}  />
        </Container>

        <Separator height={100} />

        <BannerAd 
          title ="Registrate y obten los mejores precios" 
          subtitle="¡Los mejores juegos a un click de distancia!"
          btnTitle="Entrar ahora"
          btnLink="/account"
          image="/image/publicity.png"
        />

        <Separator height={50} />

        <Container>
          <LatestGames title = "PC" limit ={3} platformId ={platformId.pc}  />
        </Container>

        <Separator height={100} />
    </BasicLayout>
  )
}
