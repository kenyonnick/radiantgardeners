import Head from 'next/head'
import styles from '../styles/Reconnect4Ds.module.css'

export default function Reconnect4Ds() {
  return (
    <div className={styles.container}>
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
          Re:Connect Dream Drop Data Doubles
        </h1>
        <h2 className={styles.description}>
          Save files for Kingdom Hearts III on PC for practicing for the event!
        </h2>
      </header>

      <main className={styles.main}>
        <div>
            <h3>
                Summary
            </h3>
            <p>In order to practice for the upcoming event, <a href="https://www.khguides.com/reconnect/data-doubles/">Dream Drop Data Doubles</a> at <a href="https://www.khguides.com/reconnect/">KHReconnect</a>, you need a Kingdom Hearts III save file at Level 70 on Proud mode.</p>
            <p>We put together three save files to help you skip past the grinding and get to practicing!</p>
        </div>
        <div>
            <h3>
                Installation
            </h3>
            <h4>1. Download the game files from Google Drive</h4>
            <a 
                href="https://drive.google.com/file/d/1Lg8zBy9dtGouMGq4mSiICtsVzKNrDhy2/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer" 
                className={styles.download}
            >
                Download
            </a>
            <h4>1. Locate your existing SaveGames folder</h4>
            <p>Note: Your installation location might be a bit different if you installed the game on a different drive.
You are trying to get to a file path that looks something like this:</p>
            <code>
                {"C:\\Users\\<user_name>\\Documents\\KINGDOM HEARTS III\\Epic Games Store\\<epic_games_store_id>\\SaveGames"}
            </code>
            <p>You should be able to get to it by opening a new Windows Explorer window and clicking Documents in the left navigation bar.</p>
            <p>For example, ours is here:</p>
            <code>
                {"C:\\Users\\Radiant\\Documents\\KINGDOM HEARTS III\\Epic Games Store\\f6177f5c3bb4c9fd4c684394a8d72e69\\SaveGames"}
            </code>
            <p>Note: I wanted to give a full example so I jumbled our id in case there is some security issue with sharing it.</p>
            <h4>2. Back up your existing saves</h4>
            <p>
                Please, please, please make a copy of your existing {'"SaveGames"'} folder before adding in the new save files.
                I really do not want someone to be heart broken that they lost their other saves.
            </p>
            <h4>3. Copy the {'"kh3sv2"'} folder into your {'"SaveGames"'} folder</h4>
            <p>
                If you launch Kingdom Hearts III without anything in the SaveGames folder, it will walk you through
                language selection and keyboard selection and populate the folder with data, including a kh3sv2 folder.
            </p>
            <p>
                PLEASE MAKE A BACK UP OF YOUR SAVE DATA BEFORE DOING THIS
                Copy the kh3sv2 we have provided into the SaveGames folder.
            </p>
            <p>
                You will need to merge your existing kh3sv2 folder with the one you are copying in and
                allow the data you are copying in to overwrite the existing data.
            </p>
            <p>WE ARE NOT RESPONSIBLE FOR LOST DATA WE ARE JUST TRYING TO HELP PEOPLE PREP FOR THE EVENT!</p>
            <h4>4. Launch the game!</h4>
            <p>
                Save 0 (Autosave) is in the Garden of Assemblage where you can hop right into Data Battles.
            </p>
            <p>
                Save 1 is pre-Re:Mind in Twilight Town (with my favorite Moogle) so you can run around and get any other items you want.
                Just keep in mind the rules for DDDD and double check the link above.
            </p>
            <p>Save 2 is post-Re:Mind story and is there just in case you wanted to start the LIMITCUT yourself.</p>
            <p>Save 3 is really just the same thing as Save 2 but made when you start LIMITCUT.</p>
            <p>
                Save 4 is the LIMITCUT save file born from Save 3 and is saved in the Garden of Assemblage
                where you can just hop right into data battles.
            </p>
            <p>
                Note: Turns out there are technically 5 save files included. 
                One of them is the autosave and then we actually have three saves within Re:Mind.
                I will update these save file numbers to make them more accurate after 
            </p>
        </div>
        <div>
            <h3>
                Help
            </h3>
            <p>Feel free to reach out for help or guidance via:</p>
            <ul>
                <ol>Twitter (DMs): @radiantgardeners</ol>
                <ol>Twitch whispers: twitch.tv/radiantgardeners</ol>
                <ol>Discord: @vallience</ol>
            </ul>
        </div>
      </main>

      <footer className={styles.links}>
          <div><a href="https://www.youtube.com/RadiantGardeners">YouTube</a></div>
          <div><a href="https://www.twitch.tv/radiantgardeners">Twitch</a></div>
          <div><a href="https://www.twitter.com/radiantgardenrs">Twitter</a></div>
          <div><a href="https://www.instagram.com/radiantgardeners">Instagram</a></div>
          <div><a href="https://www.tiktok.com/@radiantgardeners">TikTok</a></div>
      </footer>
    </div>
  )
}