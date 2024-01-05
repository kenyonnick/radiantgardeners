import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Radiant Gardeners</title>
        <meta name="description" content="A couple creating cool stuff on the internet together" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
          <div><Link href="/partyfest">Party Fest</Link></div>
        </div>
      </header>
      
    </div>
  )
}
