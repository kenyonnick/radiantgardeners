import styles from './GameCards.module.css';

import { GameCard } from "../GameCard/GameCard";
import { GAMES_LIST } from '../../../data';

export const GameCards = () => {
    return (
        <div className={styles.cards}>
            {GAMES_LIST.map((game) => (
                <GameCard
                    key={game.name}
                    {...game}
                />
            ))}
        </div>
    )
}