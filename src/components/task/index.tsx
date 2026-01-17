import { TextField } from '@src/components/text-field';
import styles from './styles.module.css';

export function Task() {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <TextField label='Task' id='task' name='task' />
      </div>
    </form>
  );
}
