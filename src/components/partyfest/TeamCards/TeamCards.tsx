/* eslint-disable @next/next/no-img-element */
import styles from './TeamCards.module.css';
import { Player } from "../../../data/partyfest2023";
import ScrollContainer from 'react-indiana-drag-scroll';
import { useRef } from 'react';

export type TeamCardsProps = {
    team: Player[];
    name: string;
};

export const TeamCards = ({ team, name }: TeamCardsProps) => {
    const container = useRef<HTMLElement>(null);

    return <div className={styles.team}>
        <h1 className={styles.name}>{name}</h1>
        <ScrollContainer horizontal vertical={false} className={styles.row}>
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
        </ScrollContainer>
    </div>;
}