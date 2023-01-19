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
    img?: string;
}

export const EXTREMESALSAING: Player = {
    name: 'Jay (Moonshot)',
    team: PURPLE,
    twitch: 'moonshotnetwork',
    img: 'Jay_Purple.png',
};

export const FOXTROTPERRY: Player = {
    name: 'FoxtrotPerry',
    team: GREEN,
    twitch: 'foxtrotperry',
    img: 'FoxtrotPerry_Green.png',
};

export const NOVANEONGIRL: Player = {
    name: 'NovaNeonGirl',
    team: PURPLE,
    img: 'NoVa_Purple.png',
};

export const KTWAYFINDER: Player = {
    name: 'KTWayfinder',
    team: GREEN,
    twitch: 'KTWayfinder',
    img: 'KTWayfinder_Green.png',
};

export const LILINDO: Player = {
    name: 'lilindo_s',
    team: PURPLE,
    twitch: 'lilindo_s',
    img: 'Lilindo_s_Purple.png'
};

export const LUULUSOUL: Player = {
    name: 'Luulu_Soul',
    team: YELLOW,
    twitch: 'LuuluSoul',
    img: 'LuuluSoul_Yellow.png',
};

export const LANZOFMASTERS: Player = {
    name: 'LanzOfMasters',
    team: YELLOW,
    twitch: 'LanzOfMasters',
    img: 'LanzOfMasters_Yellow.png',
};

export const ROYALAQUA: Player = {
    name: 'Royalaqua',
    team: GREEN,
    twitch: 'royalaqua',
    img: 'RoyalAqua_Green.png',
};

export const XILYRIA: Player = {
    name: 'xIlyria',
    team: PURPLE,
    twitch: 'xIlyria',
    img: 'Xilyria_Purple.png'
};

export const MOCHOCOLATE: Player = {
    name: 'Mochocolate9k',
    team: ORANGE,
    twitch: 'Mochocolate9k',
    img: 'Mochocolate9k_Orange.png',
};

export const NOTORCRANK: Player = {
    name: 'NotoriousCRANK',
    team: ORANGE,
    twitch: 'NotoriousCRANK',
    img: 'NotoriousCRANK_Orange.png',
};

export const ARIEFJOHAN: Player = {
    name: 'AriefJohan',
    team: YELLOW,
    twitch: 'AriefJohan',
    img: 'AriefJohan_Yellow.png',
};

export const THENINJAROID: Player = {
    name: 'TheNinjaroid',
    team: GREEN,
    twitch: 'TheNinjaroids',
    img: 'theninjaroid_Green.png',
};

export const JOHNNY_BOOMBOTZ: Player = {
    name: 'Johnny_Boombotz',
    team: ORANGE,
    twitch: 'Johnny_Boombotz',
    img: 'Johnny_Boombotz_Orange.png'
};

export const JEICE: Player = {
    name: 'Jeice (PixelScrubs)',
    team: YELLOW,
    twitch: 'pixelscrubs',
    img: 'Jeice_Yellow.png',
};

export const RITALI: Player = {
    name: 'Ritali (PixelScrubs)',
    team: ORANGE,
    twitch: 'pixelscrubs',
    img: 'Ritali_Orange.png'
};

export const EVERYONE: Player = {
    name: 'Everyone',
    team: {
        name: 'Everyone',
        color: 'black',
    }
};

export const ALL_PLAYERS: Player[] = [
    ARIEFJOHAN,
    EXTREMESALSAING,
    FOXTROTPERRY,
    JEICE,
    JOHNNY_BOOMBOTZ,
    KTWAYFINDER,
    LANZOFMASTERS,
    LILINDO,
    LUULUSOUL,
    NOVANEONGIRL,
    MOCHOCOLATE,
    NOTORCRANK,
    ROYALAQUA,
    RITALI,
    THENINJAROID,
    XILYRIA,
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

export const GREEN_TEAM = [FOXTROTPERRY, THENINJAROID, KTWAYFINDER, ROYALAQUA];
export const ORANGE_TEAM = [RITALI, JOHNNY_BOOMBOTZ, MOCHOCOLATE, NOTORCRANK];
export const PURPLE_TEAM = [EXTREMESALSAING, LILINDO, NOVANEONGIRL, XILYRIA];
export const YELLOW_TEAM = [ARIEFJOHAN, JEICE, LUULUSOUL, LANZOFMASTERS];
