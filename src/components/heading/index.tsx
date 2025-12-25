import type { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.module.css';

type HeadingProps = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>;

export function Heading({ children, ...rest }: HeadingProps) {
  return (
    <h1 {...rest} className={styles.heading}>
      {children}
    </h1>
  );
}
