import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";
import { Game } from "@/api";
import { Discount } from "@/component/Shared";
import styles from "./BannerLastGamePublished.module.scss";
import { calcDiscountedPrice } from "@/utils";

const gameCtrl = new Game();

export function BannerLastGamePublished() {
  const [game, setGame] = useState(null);
  let response;

  useEffect(() => {
    (async () => {
      try {
        response = await gameCtrl.getLastPublished();
        setGame(response.data)
        console.log('imagen es walppaer', response)
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!game) return null;
  
  const wallpaper = game.wallpaper;
  const releaseDate = game.createdAt
  const price = calcDiscountedPrice(
    game.price,
    game.discount
  );
  console.log('este es el juego', game)

  return (
    <div className={styles.container}>

      <Image src={wallpaper.url} className={styles.wallpaper} />

      <Link className={styles.infoContainer} href={game.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>

          <h2>{game.title}</h2>

          <p className={styles.price}>
            <Discount>-{game.discount}%</Discount>
            <span className={styles.finalPrice}>{price}$</span>
          </p>
        </Container>
      </Link>
    </div>
  );
}
