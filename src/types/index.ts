export type Game = {
    name: string;
    imgUrl: string;
    players: number;
};

export type Team = {
    name: string;
    color: string;
}

export type Player = {
    name: string;
    team: Team;
    twitter?: string;
    twitch?: string;
    youtube?: string;
    img?: string;
}