import styles from './GameCards.module.css';

import { GameCard } from "../GameCard/GameCard";


export const GameCards = () => {
    return (
        <div className={styles.cards}>
            <GameCard
                name="Mario Party Superstars"
                imgUrl="https://upload.wikimedia.org/wikipedia/en/1/1a/Mario_Party_Superstars_cover_art.jpg"
                players={4}
            />
            <GameCard 
                name="Gang Beasts" 
                imgUrl="https://images.squarespace-cdn.com/content/v1/5628f502e4b06b50e9430925/1610028603675-VUROJGH4BX2DLYPOO51K/Website+Header+01.png"
                players={4}
            />
            <GameCard 
                name="Ultimate Chicken Horse" 
                imgUrl="https://images.squarespace-cdn.com/content/v1/5601be1fe4b0dfb50e050a73/1513803885211-6VU0AL7AN0J2868ZATG1/2017-08-29+UltimateChickenHorse_FullGame_MasterArt.png?format=750w"
                players={4}
            />
            <GameCard
                name="Golf With Your Friends"
                imgUrl="https://upload.wikimedia.org/wikipedia/en/0/06/Golf_With_Your_Friends_cover_art_full.jpg"
                players={4}
            />
            <GameCard
                name="Fall Guys"
                imgUrl="https://images.igdb.com/igdb/image/upload/t_screenshot_big/ar9iw.jpg"
                players={16}
            />
        </div>
    )
}