export type Team = {
    name: string;
    color: string;
}

const PURPLE: Team = {
    name: 'Purple',
    color: '#fbf',
};

const GREEN: Team = {
    name: 'Green',
    color: '#bfb',
};

const ORANGE: Team = {
    name: 'Orange',
    color: 'orange',
};

const YELLOW: Team = {
    name: 'Yellow',
    color: '#bff',
};

export type Player = {
    name: string;
    team: Team;
    twitter?: string;
    twitch?: string;
    youtube?: string;
}

export const EXTREMESALSAING: Player = {
    name: 'Extremesalsaing',
    team: PURPLE,
};

export const FOXTROTPERRY: Player = {
    name: 'FoxtrotPerry',
    team: GREEN,
};

export const NOVANEONGIRL: Player = {
    name: 'NovaNeonGirl',
    team: ORANGE,
};

export const KTWAYFINDER: Player = {
    name: 'KTWayfinder',
    team: GREEN,
};

export const LILINDO: Player = {
    name: 'lilindo_s',
    team: PURPLE,
};

export const LUULUSOUL: Player = {
    name: 'Luulu_Soul',
    team: YELLOW,
};

export const LANZOFMASTERS: Player = {
    name: 'LanzOfMasters',
    team: YELLOW,
};

export const ROYALAQUA: Player = {
    name: 'Royalaqua',
    team: GREEN,
};

export const XLYRIA: Player = {
    name: 'Xlyria',
    team: PURPLE,
};

export const MOCHOCOLATE: Player = {
    name: 'Mochocolate9k',
    team: ORANGE,
};

export const NOTORCRANK: Player = {
    name: 'the_notorious_crank',
    team: ORANGE
};

export const ARIEFJOHAN: Player = {
    name: 'AriefJohan',
    team: YELLOW,
};

export const THENINJAROIDS: Player = {
    name: 'TheNinjaroids',
    team: GREEN,
};

export const JOHNNY_BOOMBOTZ: Player = {
    name: 'Johnny_Boombotz',
    team: PURPLE,
};

export const UNKNOWN_YELLOW: Player = {
    name: '???',
    team: YELLOW,
};

export const UNKNOWN_ORANGE: Player = {
    name: '???',
    team: ORANGE,
};

export const EVERYONE: Player = {
    name: 'Everyone',
    team: {
        name: 'Everyone',
        color: 'black',
    }
};

export const ALL_PLAYERS: Player[] = [
    EXTREMESALSAING,
    FOXTROTPERRY,
    NOVANEONGIRL,
    UNKNOWN_YELLOW,
    KTWAYFINDER,
    LILINDO,
    LUULUSOUL,
    UNKNOWN_ORANGE,
    LANZOFMASTERS,
    ROYALAQUA,
    XLYRIA,
    MOCHOCOLATE,
    NOTORCRANK,
    ARIEFJOHAN,
    THENINJAROIDS,
    JOHNNY_BOOMBOTZ
];