import styles from './ScheduleDay.module.css';
import { addHours, addMinutes } from "date-fns";
import format from "date-fns/format";
import { Game, Player } from '../../../data/partyfest2023';
import { IoLogoTwitch } from 'react-icons/io5';
import { useMemo } from 'react';

export type ScheduleDayProps = {
    date: Date;
    game: Game;
    durationHrs?: number;
    durationMins?: number;
    players: Player[];
}

export const ScheduleDay = ({ date, game, durationHrs, durationMins, players }: ScheduleDayProps) => {
    const showtime = useMemo(() => {
        if(durationHrs) {
            let endDateTime = addHours(date, durationHrs);
            if (durationMins) {
                endDateTime = addMinutes(endDateTime, durationMins);
            }
            return `${format(date, 'h:mma')} - ${format(endDateTime, 'h:mma')} EST`;
        } else {
            return "To Be Announced";
        }
    }, [date, durationHrs, durationMins]);

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
                    <h2>{format(date, 'LLLL do')}</h2>
                    <h3>{showtime}</h3>
                </div>
                
            </div>
            <div className={styles.players}>
                {players.sort((a, b) => a.team.name.localeCompare(b.team.name)).map((player) => (
                    <div key={player.name} className={styles.player} style={{ borderLeft: `1em solid ${player.team.color}`}}>
                        <p>{player.name}</p>
                        {player.twitch && (
                            <a 
                                className={styles.twitchLink} 
                                href={`https://www.twitch.tv/${player.twitch}`} 
                                target="_blank" 
                                rel='noreferrer'
                            >
                                <IoLogoTwitch className={styles.twitchLogo}/>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};