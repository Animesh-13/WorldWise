import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋 City List does not found .Please try again!</span>{" "}
      {message}
    </p>
  );
}

export default Message;
