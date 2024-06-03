import { useState } from "react";
import { Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import { forEach, map } from "lodash";
import { BasicModal } from "@/component/Shared";
import { calcDiscountedPrice } from "@/utils";
import styles from "./Order.module.scss";

export function Order(props) {
  const { order } = props;
  const [showModal, setShowModal] = useState(false);
  const products = order.products;
  const address = order.addressShipping;
  const totalPayment = Number(order.totalPayment);
  console.log('order', order)

  const openCloseModal = () => setShowModal((prevState) => !prevState);

  const getTotalProducts = () => {
    let total = 0;

    forEach(products, (product) => {
      total += product.quantity;
    });
    console.log(total)
    return total;
  };

  return (
    <>
      <div className={styles.order} onClick={openCloseModal}>
        <div>
          <span>
            {DateTime.fromISO(order.createdAt, { locale: "es" }).toFormat("DDD") }
          </span>
          <p>{getTotalProducts()} productos</p>
        </div>

        <p>{totalPayment.toFixed(2)}$</p>
      </div>

      <BasicModal
        show={showModal}
        onClose={openCloseModal}
        title="Información del pedido"
      >
        {map(products, (product) => (
          <div className={styles.product}>
            <Image src={product.cover.url} />

            <div>
              <div className={styles.info}>
                <div>
                  <p>{product.title}</p>
                </div>
              </div>
              <div className={styles.quantity}>
                <span>x{product.quantity}</span>
                <span>
                  {calcDiscountedPrice(
                    product.price,
                    product.discount
                  )}
                  $
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.address}>
          <div>
            <p className={styles.title}>{address.title}</p>
            <p className={styles.addressInfo}>
              {address.name}, {address.address},{" "}
              {address.state}, {address.city},{" "}
              {address.postal_code}
            </p>
          </div>
        </div>

        <div className={styles.total}>
          <p>TOTAL: {totalPayment.toFixed(2)}$</p>
        </div>
      </BasicModal>
    </>
  );
}
