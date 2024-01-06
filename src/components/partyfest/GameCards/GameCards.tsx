import styles from './GameCards.module.css';

import { GameCard } from "../GameCard/GameCard";
import { Game } from '@src/types';

type GameCardsProps = {
    gamesList: Game[];
}

export const GameCards = ({gamesList}: GameCardsProps) => {
    return (
        <div className={styles.cards}>
            {gamesList.map((game) => (
                <GameCard
                    key={game.name}
                    {...game}
                />
            ))}
        </div>
    )
}