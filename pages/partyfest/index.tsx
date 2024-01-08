import Head from 'next/head'
import { Scoreboard, Section } from '@src/components/partyfest';
import { GameCards } from '@src/components/partyfest/GameCards/GameCards';
import { ScheduleDay } from '@src/components/partyfest/ScheduleDay/ScheduleDay';
import { TeamCards } from '@src/components/partyfest/TeamCards';
import { 
  EVERYONE, 
  FALL_GUYS, 
  GANG_BEASTS, 
  GOLF_WITH_YOUR_FRIENDS, 
  CAKE_BASH, 
  ULTIMATE_CHICKEN_HORSE, 
  ULTIMATE_CHICKEN_HORSE_PLAYERS, 
  GANG_BEASTS_PLAYERS, 
  CAKE_BASH_PLAYERS, 
  GOLF_WITH_YOUR_FRIENDS_PLAYERS, 
  GREEN_TEAM,
  ORANGE_TEAM,
  PURPLE_TEAM,
  YELLOW_TEAM,
  TRICKY_TOWERS,
  TRICKY_TOWERS_PLAYERS,
  GAMES_LIST,
  MYSTERY_GAME
} from '@src/data/partyfest2024';
import styles from '@styles/PartyFest2024.module.css'
import { TeamList } from '@src/components/partyfest/TeamList';
import { Merch } from '@src/components/partyfest/Merch';

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
            <h2 className={styles.date}>January 29<sup style={{ fontSize: '0.5em'}}>th</sup> - February 3<sup style={{ fontSize: '0.5em'}}>rd</sup>, 2024</h2>
            <h2 className={styles.description}>
                A 5 day online event celebrating party games and community.
            </h2>
            <nav className={styles.links}>
              <a href="#games">Games</a>
              <a href="#teams">Teams</a>
              <a href="#merch">Merch</a>
              <a href="#schedule">Schedule</a>
              <a href="#prizes">Prizes</a>
              {/* <a href="#scores">Scores</a> */}
            </nav>
          </header>
          <Section id="games" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Games</h1>
            <p>Using an advanced and complex algorithm {"we're"} calling {'"Personal Experience"'}, we have selected some of the best party games available.</p>
            <GameCards gamesList={GAMES_LIST}/>
          </Section>
          <Section id="teams" style={{ backgroundColor: "#fbf", color: "black"}}>
            <h1 className={styles.sectionTitle}>Teams</h1>
            <p><i>{"We're"} bringing together some of our favorite content creators to form teams highly capable of partying together.</i></p>
            <div>
              <TeamList team={GREEN_TEAM} name="Team Green" />
              <TeamList team={ORANGE_TEAM} name="Team Orange" />
              <TeamList team={PURPLE_TEAM} name="Team Purple" />
              <TeamList team={YELLOW_TEAM} name="Team Yellow" />
            </div>
          </Section>
          <Section id="merch" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Merch</h1>
            <p><i>Support your favorite team by sporting some merch!</i></p>
            <br />
            <Merch />
          </Section>
          <Section id="schedule" style={{ backgroundColor: "#fbf", color: "black"}}>
            <h1 className={styles.sectionTitle}>Schedule</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '1rem'}}>
              <ScheduleDay 
                date={new Date(2024, 0, 29, 19)} 
                game={MYSTERY_GAME} 
                // durationHrs={2} 
                players={CAKE_BASH_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2024, 0, 30, 19)} 
                game={MYSTERY_GAME} 
                // durationHrs={2} 
                players={TRICKY_TOWERS_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2024, 0, 31, 19)} 
                game={MYSTERY_GAME} 
                // durationHrs={2} 
                players={ULTIMATE_CHICKEN_HORSE_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2024, 1, 1, 19)} 
                game={MYSTERY_GAME} 
                // durationHrs={2} 
                players={GANG_BEASTS_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2024, 1, 2, 11)} 
                game={MYSTERY_GAME}
                // durationHrs={1} 
                players={GOLF_WITH_YOUR_FRIENDS_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2024, 1, 3, 20)} 
                game={MYSTERY_GAME}
                // durationHrs={1} 
                players={[EVERYONE]}
              />
            </div>
          </Section>
          <Section id="prizes" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Prizes</h1>
            <p>Each member of the winning team will win:</p>
            <ul style={{ marginLeft: '2rem'}}>
              <li>
                Exclusive WINNER Party Fest merch
              </li>
              <li>
                Party Crown Emote by LuuluSoul
              </li>
              <li>
                $25 Steam Gift Card
              </li>
            </ul>
            <p>{"That's"} over $50 in prizes per person!</p>
          </Section>
          {/* <Section id="scores" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Scores</h1>
            <Scoreboard />
          </Section> */}
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