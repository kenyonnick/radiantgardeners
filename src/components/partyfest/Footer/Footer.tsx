import styles from './Footer.module.css';

export const Footer = () => {
    return <footer className={styles.footer}>
    <p>An event lovingly hosted by the Radiant Gardeners</p>
    <div className={styles.footerSocials}>
      <a target="_blank" rel="noreferrer" href="https://www.youtube.com/radiantgardeners">YouTube</a>
      <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/radiantgardeners">Twitch</a>
      <a target="_blank" rel="noreferrer" href="https://www.twitter.com/radiantgardenrs">Twitter</a>
      <a target="_blank" rel="noreferrer" href="https://discord.gg/48PNsadq3c">Discord</a>
    </div>
    <p>© Radiant Gardeners {new Date().getFullYear()}</p>
  </footer>
}