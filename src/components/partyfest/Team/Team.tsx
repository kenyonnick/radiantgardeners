/* eslint-disable @next/next/no-img-element */
import styles from './Team.module.css';
import { Player } from "../../../data";


export type TeamProps = {
    team: Player[];
    name: string;
};

export const Team = ({ team, name }: TeamProps) => {
    return <div className={styles.row}>
        <h1 className={styles.name}>{name}</h1>
        {team.sort((a, b) => a.name.localeCompare(b.name)).map((player, index) => {
            if(player.img) {
                return (
                    <img 
                        key={index} 
                        src={`/imgs/party-fest/passes/${player.img}`} 
                        alt={`${player.name} Party Pass`}
                        className={styles.img}
                    />
                );
            }
            
        })}
    </div>
}