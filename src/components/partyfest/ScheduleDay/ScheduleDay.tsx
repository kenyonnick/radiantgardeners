import styles from './ScheduleDay.module.css';
import { addHours } from "date-fns";
import format from "date-fns/format";
import { Game, Player } from '../../../data';

export type ScheduleDayProps = {
    date: Date;
    game: Game;
    durationHrs: number;
    players: Player[];
}

export const ScheduleDay = ({ date, game, durationHrs, players }: ScheduleDayProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.topRow}>
                <h1 className={styles.dayOfWeek}>{format(date, 'EEEE')}</h1>
                <div 
                    className={styles.image}
                    style={{
                        background: `url('${game.imgUrl}')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                />
                <div className={styles.datetime}>
                    <h2>{format(date, 'LLL do')}</h2>
                    <h3>{format(date, 'h:mma')} - {format(addHours(date, durationHrs), 'h:mma')} EST</h3>
                </div>
                
            </div>
            <div className={styles.players}>
                {players.sort((a, b) => a.team.name.localeCompare(b.team.name)).map((player) => (
                    <div key={player.name} className={styles.player} style={{ borderLeft: `1em solid ${player.team.color}`}}>
                        <p>{player.name}</p>
                        {/* <a>Watch</a> */}
                    </div>
                ))}
            </div>
        </div>
    );
};