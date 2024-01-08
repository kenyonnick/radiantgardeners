export type Game = {
    name: string;
    imgUrl: string;
    players: number;
};

export type TeamsKey = 'Green' | 'Orange' | 'Purple' | 'Yellow'; 

export type TeamName = TeamsKey | 'Unknown' | 'Everyone';

export type Team = {
    name: TeamName;
    color: string;
}

export type Player = {
    name: string;
    team: Team;
    twitter?: string;
    twitch?: string;
    youtube?: string;
    instagram?: string;
    img?: string;
}

export type TeamsEntry = {
    team: Team;
    players: Player[];
}

export type Teams = Record<TeamsKey, TeamsEntry>;