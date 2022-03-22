import Head from 'next/head';
import styles from '../styles/Home.module.css';
import images from '../utils/images.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Cloudinary Image</title>
        <meta name='description' content='Next Cloudinary Image' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Optimized Image Gallery</h1>
        <div className={styles.grid}>
          {images.map((image) => (
            <div key={image.id} className={styles.card}>
              <img src={image.url} alt={image.name} />
              <p>{image.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
