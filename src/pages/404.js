import styles from "../styles/404.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <p>Error 404!</p>
      <p>Такой страницы не существует.</p>
    </div>
  );
};

export default ErrorPage;
