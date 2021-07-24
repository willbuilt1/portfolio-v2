import styles from '../styles/components/Cats.module.scss';

const Category = ({ cat }) => {
  return <div className={styles.cat}>{cat}</div>;
};

export default Category;
