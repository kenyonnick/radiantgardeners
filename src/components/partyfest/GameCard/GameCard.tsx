/* eslint-disable @next/next/no-img-element */
import styles from './GameCard.module.css';

type GameCardProps = {
    name: string;
    imgUrl: string;
    players: number;
}

export const GameCard = ({ name, imgUrl, players }: GameCardProps) => {
    return (
        <div className={styles.card}>
            <div 
                className={styles.image} 
                style={{
                    background: `url('${imgUrl}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            />
            <div className={styles.description}>
                <h3>{name}</h3>
                <p>{players} Players</p>
            </div>
        </div>
    );
}