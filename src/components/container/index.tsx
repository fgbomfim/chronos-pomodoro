import type { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.module.css';

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function Row({ children, ...rest }: Props) {
  return <div {...rest} className={styles.row}>{children}</div>
}

export function Content({ children, ...rest }: Props) {
  return <div {...rest} className={styles.content}>{children}</div>
}

export function Section({ children, ...rest }: Props) {
  return <section {...rest} className={styles.section}>{children}</section>
}

export function Container({ children, ...rest }: Props) {
  return (<Row {...rest}>
    <Section>
      <Content>
        {children}
      </Content>
    </Section>
  </Row>
  );
}