import Image from 'next/image';
import styles from '../styles/Card.module.scss';
import { useRouter } from 'next/router';

const Card = ({ work }) => {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/portfolio/${work.slug}`)}
    >
      <div className={styles.card__top}>
        <Image
          src={work.image}
          layout="responsive"
          height="1080"
          width="1920"
          objectFit="cover"
          className={styles.card__image}
        ></Image>
        <h2 className={styles.card__topText}>{work.title}</h2>
      </div>
      <div className={styles.card__body}>{work.description}</div>
    </div>
  );
};

export default Card;
