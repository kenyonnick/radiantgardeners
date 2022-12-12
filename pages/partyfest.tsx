import Head from 'next/head'
import { Section } from '../src/components/partyfest';
import styles from '../styles/PartyFest.module.css'

export default function PartyFest () {
    return (
        <div className={styles.container}>
          <Head>
            <title>Party Fest</title>
            <meta name="description" content="A five day online event celebrating party games and community." />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
          </Head>
          <header className={styles.header}>
            <h1 className={styles.title}>
              Party Fest
            </h1>
            <h2 className={styles.date}>January 2023</h2>
            <h2 className={styles.description}>
                A 5 day online event celebrating party games and community.
            </h2>
            <nav className={styles.links}>
              <a href="#games">Games</a>
              <a href="#teams">Teams</a>
            </nav>
          </header>
          <Section id="games" style={{ backgroundColor: "#fbf", color: "black"}}>
            <h1 className={styles.sectionTitle}>Games</h1>
            <div>
              <div>Mario Party Superstars</div>
              <div>Tricky Towers</div>
              <div>Ultimate Chicken Horse</div>
              <div>Golf With Your Friends</div>
              <div>Fall Guys</div>
            </div>
          </Section>
          <Section id="teams" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Teams</h1>
            <p>{"We're"} bringing together some of our favorite content creators to form teams highly capable of partying together.</p>
            <br />
            <p>There will be 4 teams, each with 4 members.<br/> Each member will represent their team in one of the games.</p>
            <br />
            <p>Teams will be announced soon!</p>
          </Section>
          <footer className={styles.footer}>
            <p>An event lovingly hosted by the Radiant Gardeners</p>
            <div className={styles.footerSocials}>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/radiantgardeners">YouTube</a>
              <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/radiantgardeners">Twitch</a>
              <a target="_blank" rel="noreferrer" href="https://www.twitter.com/radiantgardenrs">Twitter</a>
              <a target="_blank" rel="noreferrer" href="https://discord.gg/qw76xS25A6">Discord</a>
            </div>
          </footer>
      </div>
    );
}