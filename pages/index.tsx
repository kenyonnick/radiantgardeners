import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Radiant Gardeners</title>
        <meta name="description" content="A couple creating cool stuff on the internet together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
          Radiant Gardeners
        </h1>
        <h2 className={styles.description}>
          A couple creating cool stuff on the internet together.
        </h2>
        <div className={styles.links}>
          <div><a href="https://www.youtube.com/RadiantGardeners">YouTube</a></div>
          <div><a href="https://www.twitch.tv/radiantgardeners">Twitch</a></div>
          <div><a href="https://www.twitter.com/radiantgardenrs">Twitter</a></div>
          <div><a href="https://www.instagram.com/radiantgardeners">Instagram</a></div>
          <div><a href="https://www.tiktok.com/@radiantgardeners">TikTok</a></div>
        </div>
      </header>
      
    </div>
  )
}
