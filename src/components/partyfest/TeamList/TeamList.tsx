/* eslint-disable @next/next/no-img-element */
import styles from './TeamList.module.css';
import { Player } from "@src/types";
import { IoGlobeOutline, IoLogoInstagram, IoLogoTwitch, IoLogoWebComponent, IoLogoYoutube } from 'react-icons/io5';
import { RiBlueskyFill } from "react-icons/ri";

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
                                <h3>{player.name}
                                {player.pronouns && <span className={styles.pronouns}>({player.pronouns})</span>}
                                </h3>
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
                                    {player.instagram && (
                                        <a href={`https://www.instagram.com/${player.instagram}`} target="_blank" rel="noreferrer">
                                            <IoLogoInstagram />
                                        </a>
                                    )}
                                    {player.bluesky && (
                                        <a href={`https://bsky.app/profile/${player.bluesky}`} target="_blank" rel="noreferrer">
                                        <RiBlueskyFill />
                                    </a>
                                    )}
                                    {player.website && (
                                        <a href={player.website} target="_blank" rel="noreferrer">
                                        <IoGlobeOutline />
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