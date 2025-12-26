import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.module.css';

type AnchorProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function Anchor({ children, className, ...rest }: AnchorProps) {
  return (
    <a className={`${styles.anchor} ${className}`} {...rest}>
      {children}
    </a>
  );
}
