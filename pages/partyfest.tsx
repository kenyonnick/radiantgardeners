import Head from 'next/head'
import { Scoreboard, Section } from '../src/components/partyfest';
import { GameCards } from '../src/components/partyfest/GameCards/GameCards';
import { ScheduleDay } from '../src/components/partyfest/ScheduleDay/ScheduleDay';
import { Team } from '../src/components/partyfest/Team';
import { 
  EVERYONE, 
  FALL_GUYS, 
  GANG_BEASTS, 
  GOLF_WITH_YOUR_FRIENDS, 
  MARIO_PARTY_SUPERSTARS, 
  ULTIMATE_CHICKEN_HORSE, 
  ULTIMATE_CHICKEN_HORSE_PLAYERS, 
  GANG_BEASTS_PLAYERS, 
  MARIO_PARTY_PLAYERS, 
  GOLF_WITH_YOUR_FRIENDS_PLAYERS, 
  GREEN_TEAM,
  ORANGE_TEAM,
  PURPLE_TEAM,
  YELLOW_TEAM,
} from '../src/data';
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
            <h2 className={styles.date}>January 23<sup style={{ fontSize: '0.5em'}}>rd</sup> - 27<sup style={{ fontSize: '0.5em'}}>th</sup> 2023</h2>
            <h2 className={styles.description}>
                A 5 day online event celebrating party games and community.
            </h2>
            <nav className={styles.links}>
              <a href="#teams">Teams</a>
              <a href="#games">Games</a>
              <a href="#schedule">Schedule</a>
              <a href="#prizes">Prizes</a>
              <a href="#scores">Scores</a>
            </nav>
          </header>
          <Section id="teams" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Teams</h1>
            <p>{"We're"} bringing together some of our favorite content creators to form teams highly capable of partying together.</p>
            <br />
            <p>
              There will be 4 teams, each with 4 members.
              <br/> 
              Each member will represent their team in one of the games.
              <br />
              All four team members will work together in Fall Guys to finish the competition!
            </p>
            <div>
              <Team team={GREEN_TEAM} name="Green Team" />
              <Team team={ORANGE_TEAM} name="Orange Team" />
              <Team team={PURPLE_TEAM} name="Purple Team" />
              <Team team={YELLOW_TEAM} name="Yellow Team" />
            </div>
          </Section>
          <Section id="games" style={{ backgroundColor: "#fbf", color: "black"}}>
            <h1 className={styles.sectionTitle}>Games</h1>
            <p>Using an advanced and complex algorithm {"we're"} calling {'"Personal Experience"'}, we have selected some of the best party games available.</p>
            <GameCards />
          </Section>
          <Section id="schedule" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Schedule</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '1rem'}}>
              <ScheduleDay 
                date={new Date(2023, 0, 23, 19)} 
                game={ULTIMATE_CHICKEN_HORSE} 
                durationHrs={2} 
                players={ULTIMATE_CHICKEN_HORSE_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2023, 0, 24, 19)} 
                game={GANG_BEASTS} 
                durationHrs={2} 
                players={GANG_BEASTS_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2023, 0, 25, 19)} 
                game={MARIO_PARTY_SUPERSTARS} 
                durationHrs={2} 
                players={MARIO_PARTY_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2023, 0, 26, 10)} 
                game={GOLF_WITH_YOUR_FRIENDS} 
                durationHrs={2} 
                players={GOLF_WITH_YOUR_FRIENDS_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2023, 0, 27, 21)} 
                game={FALL_GUYS}
                durationHrs={1} 
                players={[EVERYONE]}
              />
            </div>
          </Section>
          <Section id="prizes" style={{ backgroundColor: "#fbf", color: "black"}}>
            <h1 className={styles.sectionTitle}>Prizes</h1>
            <p>Each member of the winning team will win:</p>
            <ul style={{ marginLeft: '2rem'}}>
              <li>
                Custom Emote by LuuluSoul
              </li>
              <li>
                Party Crown Emote by LuuluSoul
              </li>
              <li>
                $25 Steam Gift Card
              </li>
            </ul>
            <p>{"That's"} over $100 in prizes!</p>
          </Section>
          <Section id="scores" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Scores</h1>
            <Scoreboard />
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