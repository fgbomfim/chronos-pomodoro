import type { ComponentProps, PropsWithChildren } from 'react';

import styles from './styles.module.css';

type ButtonColor = 'green' | 'read';

type ButtonProps = PropsWithChildren<ComponentProps<'button'>> & {
  color?: ButtonColor;
};

export function Button({ children, color = 'green', ...props }: ButtonProps) {
  return (
    <div className={styles.container}>
      <button {...props} className={`${styles.button} ${styles[color]}`}>
        {children}
      </button>
    </div>
  );
}
