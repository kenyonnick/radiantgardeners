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
              <a href="#teams">Teams</a>
              <a href="#games">Games</a>
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
                date={new Date(2025, 0, 24, 19)} 
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
          
          <Section id="merch" style={{ backgroundColor: "#fbf", color: "black"}}>
            <h1 className={styles.sectionTitle}>Merch</h1>
            <p><i>Support your favorite team by sporting some merch!</i></p>
            <br />
            <Merch2025 />
          </Section>
          <Section id="prizes" style={{ backgroundColor: "#bff", color: "black"}}>
            <h1 className={styles.sectionTitle}>Prizes</h1>
            <div className={styles.prizeSection}>
              <h2>Party Fest Winner</h2>
              <h3>Prizes:</h3>
              <div className={styles.prizeList}>
                <p>
                  The Party Crown Title
                </p>
                <p>
                  $50 Steam Gift Card <em>(per member)</em>
                </p>
                <p>
                  Team cheer emote available until the next Party Fest
                </p>
              </div>
              <br />
              <h3>How to Win</h3>
              <p>Be on the team that wins Party Fest!</p>
              <p><em>Party Fest participants only</em></p>
            </div>
            <div className={styles.prizeSection}>
              <h2>Best Clip Award</h2>
              <h3>Prize: $25 Steam Gift Card</h3>
              <br />
              <h3>How to Enter</h3>
              <div className={styles.prizeList}>
                <p>
                  1. Make a free <a href="https://www.clipgarden.tv/">
                    Clip Garden
                  </a>{' '}
                  account by signing up with Twitch
                </p>
                <p>
                  2. Submit clips to the
                  {' '}
                  <a href="https://www.clipgarden.tv/channel/RadiantGardeners/collections/party-fest-2025">
                    Party Fest 2025 Collection
                  </a>
                </p>
                <p>
                  3. Like clips in the collection and get people to like yours!
                </p>
              </div>
              <br />
              <h3>How to Win</h3>
              <p>Have the most liked clip in the collection by the end of Party Fest!</p>
            </div>
            <div className={styles.prizeSection}>
              <h2>Biggest Cheer Award</h2>
              <h3>Prize: Party Fest 2025 T-Shirt</h3>
              <br />
              <h3>How to Enter</h3>
              <div className={styles.prizeList}>
                <p style={{ width: '360px' }}>
                  Cheer for your team in the <a href="https://www.twitch.tv/radiantgardeners">RadiantGardeners' Twitch Chat</a> using the follower emote for the team you want to cheer for to score Cheer Points!
                </p>
                <p>A Cheer Point is scored for a team if your message contains at least one cheer emote for that team</p>
                <p>Cheer Points are scored on a 2 second cooldown</p>
              </div>
              <p><b>Win Condition:</b> Score more cheer points for a single team than anyone else!</p>
            </div>
            <p style={{ width: '360px' }}>Scoring will conclude and winners will be decided after the final round of Fall Guys during the finale.</p>
            <br />
            <p style={{ color: '#888'}}><em>Prizes subject to change</em></p>
          </Section>
          <Section 
            id="thanks"
            style={{
              backgroundColor: "#bff",
              color: "black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <h1 className={styles.sectionTitle}>Special Thanks</h1>
            <p style={{ width: '360px', textAlign: "center" }}>
              We owe a huge amount of thanks to our mods. 
              They supported and encouraged us in planning the event, 
              and helped us with moderation and scoring throughout. 
              They are a big part of why things could run as smoothly as they did.
              <br />
              <br />
              If you see them online, thank them for such a great Party Fest 2025!
            </p>
            <div className={styles.modlist}>
              <h3>The Mods</h3>
              <em>Listed alphabetically</em>
              <br />
              <p>ast_rsk</p>
              <p>jeice795</p>
              <p>livelaughlane</p>
              <p>royalaqua</p>
              <p>saharahinfinity</p>
              <p>theninjaroids</p>
              <p>uphillsubset</p>
            </div>
          </Section>

          <Footer />
      </div>
    );
}