import styles from './Page.module.scss';

const Page = () => {
  const test = 'Test';

  return (
    <div className={styles.page}>
      Page
      {test}
    </div>
  );
};

export default Page;
