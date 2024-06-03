import { Container } from "semantic-ui-react";
import { Footer, HeaderCart } from "@/component/layout";
import { Separator } from "@/component/Shared";

export function CartLayout(props) {
  const { children } = props;

  return (
    <>
      <HeaderCart />
      <Separator height={150} />
      <Container>{children}</Container>
      <Separator height={70} />
      <Footer />
    </>
  );
}
