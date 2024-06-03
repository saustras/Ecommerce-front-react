import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/image/logo.png" alt="Gaming" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Política de privacidad</Link>
              <Link href="#">Contacto</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button 
              as="a" 
              target="_blank" 
              href="https://www.facebook.com/" 
              circular color="facebook" 
              icon="facebook" />
            <Button 
              as="a" 
              target="_blank" 
              href="https://x.com/home" 
              circular color="twitter" 
              icon="twitter" />
            <Button 
              as="a" 
              target="_blank" 
              href="https://www.linkedin.com/in/federico-rendon-buelvas-b93425161/" 
              circular color="linkedin" icon="linkedin" />
            <Button 
              as="a" 
              target="_blank" 
              href="https://www.youtube.com/" 
              circular color="youtube" 
              icon="youtube" />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>Copyright © 2023 Gaming - All rights reserved</span>
        </div>
      </Container>
    </div>
  );
}
