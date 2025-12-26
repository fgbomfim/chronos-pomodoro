import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { Anchor } from '@src/elements/anchor';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <Anchor href='#' className={styles.menuLink}>
        <HouseIcon />
      </Anchor>

      <Anchor href='#' className={styles.menuLink}>
        <HistoryIcon />
      </Anchor>

      <Anchor href='#' className={styles.menuLink}>
        <SettingsIcon />
      </Anchor>

      <Anchor href='#' className={styles.menuLink}>
        <SunIcon />
      </Anchor>
    </nav>
  );
}
