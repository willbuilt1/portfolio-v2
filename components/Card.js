import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/Card.module.scss';
import Category from './Cats';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Card = ({ portfolio }) => {
  return (
    <Link href={`/work/${portfolio.slug}`}>
      <div
        className={styles.card}
        // onClick={() => router.push(`/work/${portfolio.slug}`)}
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
        </div>
        <div className={styles.card__bottom}>
          <h2>{portfolio.siteName}</h2>
          <div>{documentToReactComponents(portfolio.shortDesc.json)}</div>
          <div className={styles.card__cats}>
            {portfolio.cat.map((category, index) => (
              <Category key={index} cat={category}></Category>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
