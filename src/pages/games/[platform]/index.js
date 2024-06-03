import { Platform, Game } from "@/api";

export { default } from "./platform";

export async function getServerSideProps(context) {
  const {
    params: { platform },
    query: { page = 1 },
  } = context;

  const platformCtrl = new Platform();
  const responsePlatform = await platformCtrl.getBySlug(platform);

  const gameCtrl = new Game();
  const responseGames = await gameCtrl.getGamesByPlatformSlug(platform, page);
  console.log(responseGames)
  return {
    props: {
      platform: responsePlatform,
      games: responseGames.data,
      pagination: {
        pageCount:1,
        page:responseGames.count
      }
      ,
    },
  };
}
