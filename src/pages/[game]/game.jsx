import { BasicLayout } from "@/layouts";
import { Game } from "@/component/Game";
import { Separator } from "@/component/Shared";

export default function GamePage(props) {
  const { response } = props;
  const game = response.data[0]
  const wallpaper = game.wallpaper;
  const screenshots = game.screenshots;
  return (
    <>
      <BasicLayout>
        <Game.HeaderWallpaper image={wallpaper.url} />
        <Game.Panel gameId={game.id} game={game} />

        <Separator height={50} />

        <Game.Info game={game} />

        <Separator height={30} />

        <Game.Media
          video={game.video}
          screenshots={screenshots}
        />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
