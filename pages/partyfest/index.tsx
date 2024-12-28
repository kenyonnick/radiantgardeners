import Head from 'next/head'
import { Scoreboard, Section } from '@src/components/partyfest';
import { GameCards } from '@src/components/partyfest/GameCards/GameCards';
import { ScheduleDay } from '@src/components/partyfest/ScheduleDay/ScheduleDay';
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
} from '@src/data/partyfest2025';
import styles from '@styles/PartyFest2025.module.css'
import { TeamList } from '@src/components/partyfest/TeamList';
import Merch2025 from '@src/components/partyfest/Merch/Merch2025';
import { Footer } from '@src/components/partyfest/Footer/Footer';

export default function PartyFest () {
    return (
        <div className={styles.container}>
          <Head>
            <title>Party Fest</title>
            <meta name="description" content="A six day online event celebrating party games and community." />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
          </Head>
          <header className={styles.header}>
            <h1 className={styles.title}>
              Party Fest
            </h1>
            <h2 className={styles.date}>January 20<sup style={{ fontSize: '0.5em'}}>th</sup> - 25<sup style={{ fontSize: '0.5em'}}>th</sup>, 2025</h2>
            <h2 className={styles.description}>
                A 6 day online event celebrating party games and community.
            </h2>
            <nav className={styles.links}>
              <a href="#schedule">Schedule</a>
              <a href="#games">Games</a>
              <a href="#teams">Teams</a>
              <a href="#merch">Merch</a>
              <a href="#prizes">Prizes</a>
            </nav>
          </header>
          <Section id="schedule" style={{ backgroundColor: "#fbf", color: "black"}}>
            <h1 className={styles.sectionTitle}>Schedule</h1>
            <p><i>Each event will be streamed on the {' '}
              <a href="https://www.twitch.tv/radiantgardeners" className={styles.linkUnderline}>
                Radiant Gardeners
              </a>
              {' '}
              Twitch channel.
            </i></p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '1rem'}}>
              <ScheduleDay 
                date={new Date(2025, 0, 20, 19)} 
                game={ULTIMATE_CHICKEN_HORSE}
                durationHrs={2} 
                players={ULTIMATE_CHICKEN_HORSE_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2025, 0, 21, 18)} 
                game={TRICKY_TOWERS} 
                durationHrs={2} 
                players={TRICKY_TOWERS_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2025, 0, 22, 18)} 
                game={CAKE_BASH} 
                durationHrs={2} 
                players={CAKE_BASH_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2025, 0, 23, 18)} 
                game={GANG_BEASTS} 
                durationHrs={2} 
                players={GANG_BEASTS_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2025, 0, 24, 18)} 
                game={GOLF_WITH_YOUR_FRIENDS}
                durationHrs={2} 
                players={GOLF_WITH_YOUR_FRIENDS_PLAYERS}
              />
              <ScheduleDay 
                date={new Date(2025, 0, 25, 18)} 
                game={FALL_GUYS}
                durationHrs={2} 
                players={[EVERYONE]}
              />
            </div>
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
          <Section id="games" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Games</h1>
            <p><i>Using an advanced and complex algorithm {"we're"} calling {'"Personal Experience"'}, we have selected some of the best party games available.</i></p>
            <GameCards gamesList={GAMES_LIST}/>
          </Section>
          
          <Section id="merch" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Merch</h1>
            <p><i>Support your favorite team by sporting some merch!</i></p>
            <br />
            <Merch2025 />
          </Section>
          <Section id="prizes" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Prizes</h1>
            <h3>The winning team will win:</h3>
            <div className={styles.prizeList}>
              <p>
                The Party Crown Title
              </p>
              <p>
                $50 Steam Gift Card (for each member)
              </p>
              <p>
                Team cheer emote available until the next Party Fest
              </p>
            </div>
            <p style={{ color: '#888'}}><em>Prizes subject to change</em></p>
          </Section>
          <Footer />
      </div>
    );
}