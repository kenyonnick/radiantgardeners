export type Game = {
    name: string;
    imgUrl: string;
    players: number;
};

export type TeamsKey = 'Green' | 'Orange' | 'Purple' | 'Yellow' | 'No Team'; 

export type TeamName = TeamsKey | 'Unknown' | 'Everyone';

export type Team = {
    name: TeamName;
    color: string;
}

export type Player = {
    name: string;
    team: Team;
    pronouns?: string;
    twitter?: string;
    bluesky?: string;
    twitch?: string;
    youtube?: string;
    instagram?: string;
    website?: string;
    img?: string;
}

export type TeamsEntry = {
    team: Team;
    players: Player[];
}

export type Teams = Record<TeamsKey, TeamsEntry>;