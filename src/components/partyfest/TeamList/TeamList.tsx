/* eslint-disable @next/next/no-img-element */
import styles from './TeamList.module.css';
import { Player } from "@src/types";
import { IoLogoInstagram, IoLogoTwitch, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';

export type TeamListProps = {
    team: Player[];
    name: string;
};

export const TeamList = ({ team, name }: TeamListProps) => {
    return <div className={styles.team}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.row}>
            {team.sort((a, b) => a.name.localeCompare(b.name)).map((player, index) => {
                if(player.img) {
                    return (
                        <div 
                            key={`team-list-${name}-${index}`} 
                            className={styles.player}
                            style={{ backgroundColor: player.team.color}}
                        >
                            <div 
                                className={styles.playerThumbnail} 
                                style={{ 
                                    backgroundColor: player.team.color,
                                    backgroundImage: player.img ? `url(${player.img})` : undefined,
                                }}
                            />
                            <div className={styles.playerInfo}>
                                <h3>{player.name}</h3>
                                <div className={styles.socials}>
                                    {player.twitch && (
                                        <a href={`https://www.twitch.tv/${player.twitch}`} target="_blank" rel="noreferrer">
                                            <IoLogoTwitch />
                                        </a>
                                    )}
                                    {player.youtube && (
                                        <a href={`https://www.youtube.com/${player.youtube}`} target="_blank" rel="noreferrer">
                                            <IoLogoYoutube/>
                                        </a>
                                    )}
                                    {player.twitter && (
                                        <a href={`https://www.twitter.com/${player.twitter}`} target="_blank" rel="noreferrer">
                                            <IoLogoTwitter />
                                        </a>
                                    )}
                                    {player.instagram && (
                                        <a href={`https://www.instagram.com/${player.instagram}`} target="_blank" rel="noreferrer">
                                            <IoLogoInstagram />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                }
                
            })}
        </div>
    </div>;
}