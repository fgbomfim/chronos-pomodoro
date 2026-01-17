import type { ComponentProps } from 'react';

import styles from './styles.module.css';

interface TextFieldProps extends ComponentProps<'input'> {
  label: string;
}

export function TextField({ id, label, ...rest }: TextFieldProps) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>

      <input type='text' className={styles.input} id={id} {...rest} />
    </>
  );
}
