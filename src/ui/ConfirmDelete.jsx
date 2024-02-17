import styles from './ConfirmDelete.module.css';
import Button from './Button';
import Heading from './Heading';

function ConfirmDelete({ resource, onConfirm, disabled, onCloseModal }) {
  return (
    <div className={styles.confirmDeleteContainer}>
      <Heading type="h3">Delete {resource}</Heading>
      <p>
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div>
        <Button variation="secondary" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variation="danger" disabled={disabled}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
