import Image from 'next/image';
import styles from '../styles/components/Card.module.scss';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Card = ({ portfolio }) => {
  console.log(portfolio);
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/work/${portfolio.slug}`)}
    >
      <div className={styles.card__top}>
        <Image
          src={portfolio.thumbnail.url}
          layout="responsive"
          height="1080"
          width="1920"
          objectFit="cover"
          className={styles.card__image}
        ></Image>
        <h2 className={styles.card__topText}>{portfolio.siteName}</h2>
      </div>
      {/* <div
        className={styles.card__body}
        dangerouslySetInnerHTML={work.description}
      ></div> */}
      <div>{documentToReactComponents(portfolio.desc.json)}</div>
    </div>
  );
};

export default Card;
