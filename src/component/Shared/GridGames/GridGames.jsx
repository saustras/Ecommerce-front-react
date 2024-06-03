import Link from "next/link";
import { map } from "lodash";
import { calcDiscountedPrice } from "@/utils";
import { Discount  } from "@/component/Shared";
import styles from "./GridGames.module.scss";


export function GridGames(props) {
  const { games } = props;

  return (
    <div className={styles.gridGames}>
      {map(games, (game) => (
        <Link
          key={game.id}
          href={`/${game.slug}`}
          className={styles.game}
        >
          <div>
            <img src={game.cover.url} />
            {game.discount > 0 && (
              <Discount className={styles.discount}>
                {`-${game.discount}%`}
              </Discount>
            )}
          </div>

          <div>
            <span>{game.title}</span>
            <span className={styles.price}>
              {calcDiscountedPrice(
                game.price,
                game.discount
              )}
              $
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
