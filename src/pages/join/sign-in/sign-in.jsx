import { JoinLayout } from '@/layouts';
import styles from './sign-in.module.scss'
import { LoginForm } from '@/component/auth';
import Link from 'next/link';

function SignInPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar sesión</h3>
          <LoginForm />

          <div className={styles.actions}>
            <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}

export default SignInPage;