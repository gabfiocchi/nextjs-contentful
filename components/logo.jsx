import styles from '../styles/components/logo.module.scss';
import Link from 'next/link';

const Logo = () => (
    <Link href="/">
        <h1 className={styles.brand}>
            Singular <span>Cover</span>
        </h1>
    </Link>
);

export default Logo;