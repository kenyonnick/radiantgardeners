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
    color: '#ff4',
};

export type Player = {
    name: string;
    team: Team;
    twitter?: string;
    twitch?: string;
    youtube?: string;
}

export const EXTREMESALSAING: Player = {
    name: 'Jay (Moonshot)',
    team: PURPLE,
};

export const FOXTROTPERRY: Player = {
    name: 'FoxtrotPerry',
    team: GREEN,
};

export const NOVANEONGIRL: Player = {
    name: 'NovaNeonGirl',
    team: PURPLE,
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

export const XILYRIA: Player = {
    name: 'xIlyria',
    team: PURPLE,
};

export const MOCHOCOLATE: Player = {
    name: 'Mochocolate9k',
    team: ORANGE,
};

export const NOTORCRANK: Player = {
    name: 'NotoriousCRANK',
    team: ORANGE
};

export const ARIEFJOHAN: Player = {
    name: 'AriefJohan',
    team: YELLOW,
};

export const THENINJAROID: Player = {
    name: 'TheNinjaroid',
    team: GREEN,
};

export const JOHNNY_BOOMBOTZ: Player = {
    name: 'Johnny_Boombotz',
    team: ORANGE,
};

export const JEICE: Player = {
    name: 'Jeice (PixelScrubs)',
    team: YELLOW,
};

export const RITALI: Player = {
    name: 'Ritali (PixelScrubs)',
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
    JEICE,
    KTWAYFINDER,
    LILINDO,
    LUULUSOUL,
    RITALI,
    LANZOFMASTERS,
    ROYALAQUA,
    XILYRIA,
    MOCHOCOLATE,
    NOTORCRANK,
    ARIEFJOHAN,
    THENINJAROID,
    JOHNNY_BOOMBOTZ
];

export const ULTIMATE_CHICKEN_HORSE_PLAYERS = [
    EXTREMESALSAING,
    FOXTROTPERRY,
    JOHNNY_BOOMBOTZ,
    JEICE
];

export const GANG_BEASTS_PLAYERS = [
    KTWAYFINDER,
    LILINDO,
    LUULUSOUL,
    RITALI
];

export const MARIO_PARTY_PLAYERS = [LANZOFMASTERS, ROYALAQUA, XILYRIA, MOCHOCOLATE];

export const GOLF_WITH_YOUR_FRIENDS_PLAYERS = [
    NOTORCRANK, 
    ARIEFJOHAN, 
    THENINJAROID, 
    NOVANEONGIRL
];
