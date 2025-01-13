import { Player, Team, Teams } from "@src/types";

export const PURPLE: Team = {
    name: 'Purple',
    color: '#ca8bff',
};

export const GREEN: Team = {
    name: 'Green',
    color: '#bfb',
};

export const ORANGE: Team = {
    name: 'Orange',
    color: '#F5AE54',
};

export const YELLOW: Team = {
    name: 'Yellow',
    color: '#ff4',
};

export const NO_TEAM: Team = {
    name: "No Team",
    color: '#000',
};

export const UNKNOWN: Team = {
    name: "Unknown",
    color: '#000',
};

export const MYSTERY_GREEN: Player = {
    name: 'Green Team Member',
    team: GREEN,
};

export const MYSTERY_ORANGE: Player = {
    name: 'Orange Team Member',
    team: ORANGE,
};

export const MYSTERY_YELLOW: Player = {
    name: 'Yellow Team Member',
    team: YELLOW,
};

export const MYSTERY_PURPLE: Player = {
    name: 'Purple Team Member',
    team: PURPLE,
};

const imgRoot2024 = "imgs/party-fest/2024/players/";
const imgRoot2025 = "imgs/party-fest/2025/players/";

// GREEN
// Crank
export const NOTORCRANK: Player = {
    name: 'NotoriousCRANK',
    team: GREEN,
    twitch: 'NotoriousCRANK',
    twitter: '@NotorCRANK',
    bluesky: 'notoriouscrank.bsky.social',
    pronouns: 'He/Him',
    img: imgRoot2024+'crank.png',
};

// Saharah
export const SAHARAH: Player = {
    name: 'saharahinfinity',
    team: GREEN,
    twitch: 'saharahinfinity',
    youtube: '@SaharahInfinity',
    twitter: '@SaharahInfinity',
    bluesky: 'saharahinfinity.bsky.social',
    instagram: 'SaharahInfinity',
    pronouns: 'She/Her',
    img: imgRoot2025 + 'Saharah512.png'
};

// Komi
export const PAOPUKOMI: Player = {
    name: 'PaopuKomi',
    team: GREEN,
    twitch: 'PaopuKomi',
    youtube: '@PaopuKomi',
    bluesky: 'paopukomi.bsky.social',
    pronouns: 'They/Them',
    img: imgRoot2025 + 'Komi.png',
};

// Lanz
export const LANZTHEMASTER: Player = {
    name: 'LanzTheMaster',
    team: GREEN,
    twitch: 'LanzTheMaster',
    youtube: '@LanzTheMaster',
    bluesky: 'lanzthemaster.bsky.social',
    pronouns: 'He/Him',
    img: imgRoot2025 + 'Lanz.png',
};

// Vetelino
export const VETELINO: Player = {
    name: 'Vetelino',
    team: GREEN,
    twitch: 'Vetelino',
    youtube: '@Vetelino',
    twitter: '@VetelinoTV',
    bluesky: 'vetelino.bsky.social',
    pronouns: 'He/Him',
    img: imgRoot2025 + 'Vetelino.jpg',
};

// ORANGE
// Ninjaroids
export const THENINJAROID: Player = {
    name: 'TheNinjaroid',
    team: ORANGE,
    twitch: 'TheNinjaroids',
    pronouns: 'He/Him',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/fdca4572-6959-449a-a6ad-977bf8fe6082-profile_image-150x150.png',
};

// Uphill
export const UPHILLSUBSET: Player = {
    name: 'UphillSubset72',
    team: ORANGE,
    twitch: 'UphillSubset',
    pronouns: 'He/Him',
    img: imgRoot2024+'Uphill.jpg',
};

// Folzy
export const MYSTERY_A: Player = {
    name: 'folzyfantasy15',
    team: ORANGE,
    twitch: 'folzyfantasy15',
    youtube: '@folzyfantasy15',
    bluesky: 'folzyfantasy15.bsky.social',
    instagram: 'folzybear15',
    pronouns: 'He/Him',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1f8eb389-2314-4ad5-98aa-697715b28f32-profile_image-300x300.png',
    
};

// DataRich
export const MYSTERY_B: Player = {
    name: 'DataRich',
    team: ORANGE,
    twitch: 'DataRich',
    youtube: '@DataRich',
    bluesky: 'datarich.bsky.social',
    instagram: 'thedatarich',
    pronouns: 'He/Him',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3b1e781c-0822-4c7b-b823-e82a3f231db4-profile_image-300x300.png',
};

// Croix
export const GAMECROIX: Player = {
    name: 'GameCroix',
    team: ORANGE,
    twitch: 'GameCroix',
    youtube: '@GameCroix',
    twitter: '@GameCroix',
    instagram: 'GameCroix',
    bluesky: 'gamecroix.bsky.social',
    website: 'gamecroix.com',
    pronouns: 'He/Him',
    img: imgRoot2024+'GameCroixHm.png',
};

// PURPLE
// Brandon
export const BRANDONGLOVICH: Player = {
    name: 'brandonglovich',
    team: PURPLE,
    twitch: 'brandonglovich',
    youtube: '@brandonglovich',
    twitter: '@Brandon_Glovich',
    instagram: 'brandonglovich',
    bluesky: 'brandonglovich.bsky.social',
    pronouns: 'He/Him',
    img: imgRoot2025 + 'Brandon.png',
};

// Faux
export const FAUXRETRO: Player = {
    name: 'FauxRetro',
    team: PURPLE,
    twitch: 'FauxRetro',
    youtube: '@FauxRetro',
    twitter: '@FauxRetro',
    bluesky: 'fauxretro.bsky.social',
    pronouns: 'He/Him',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/5a255dd1-a5ed-4337-99a4-7ce6d2237bd3-profile_image-150x150.png',
};

// Comics
export const CRAZYCOMICS: Player = {
    name: 'Crazy_Comics',
    team: PURPLE,
    twitch: 'Crazy_Comics',
    youtube: '@Crazy_Comics',
    twitter: '@CrazyComics23',
    instagram: 'CrazyComics23',
    pronouns: 'He/Him',
    img: imgRoot2024+'CrazyComics.png'
};

// Aqua
export const ROYALAQUA: Player = {
    name: 'RoyalAqua',
    team: PURPLE,
    twitch: 'royalaqua',
    youtube: '@royalaqua7',
    twitter: '@royalaqua7',
    bluesky: 'royalaqua.bsky.social',
    pronouns: 'She/Her',
    img: imgRoot2025+'Aqua512.png',
};

// Water
export const WATERKH: Player = {
    name: 'waterkh',
    team: PURPLE,
    twitch: 'waterkh',
    youtube: '@WaterKH',
    bluesky: 'waterkh.bsky.social',
    pronouns: 'They/Them',
    img: imgRoot2025 + 'WaterKH512.png',
};


// YELLOW
// Daxian
export const NOBODYDAXIAN: Player = {
    name: 'NobodyDaxian',
    team: YELLOW,
    twitch: 'nobodydaxian',
    youtube: '@NobodyDaxian',
    twitter: 'nobodydaxian.bluesky.social',
    pronouns: 'He/Him',
    img: imgRoot2025 + 'NobodyDaxian512.png',
};

// KT
export const KTWAYFINDER: Player = {
    name: 'KTWayfinder',
    team: YELLOW,
    twitch: 'KTWayfinder',
    youtube: '@ktwayfinder',
    pronouns: 'She/Her',
    img: imgRoot2024 + 'KT.png',
};

// Guides
export const KHGUIDES: Player = {
    name: 'KHGuides',
    team: YELLOW,
    twitch: 'KHGuides',
    youtube: '@KHGuides',
    twitter: 'KHGuides',
    bluesky: 'khguides.com',
    website: 'khguides.com',
    pronouns: 'He/Him',
    img: imgRoot2024+'Guides.png',
};

// Violin
export const VIOLIN: Player = {
    name: 'Violin',
    team: YELLOW,
    twitch: 'Violin',
    youtube: '@ViolinSpeedruns',
    twitter: '@ViolinSpeedruns',
    bluesky: 'violinspeedruns.bsky.social',
    pronouns: 'He/Him',
    img: imgRoot2024+'Violin.jpg',
};
// Whale
export const PREFERREDWHALE: Player = {
    name: 'PreferredWhale6',
    team: YELLOW,
    twitch: 'preferredwhale6',
    youtube: '@preferredWhale6',
    bluesky: 'preferredwhale6.bsky.social',
    pronouns: 'She/Her',
    img: imgRoot2025 + 'Whale512.png',
};

export const EVERYONE: Player = {
    name: 'Everyone',
    team: {
        name: 'Everyone',
        color: 'black',
    }
};

export const ALL_PLAYERS: Player[] = [
    GAMECROIX,
    PAOPUKOMI,
    NOBODYDAXIAN,
    LANZTHEMASTER,
    SAHARAH,
    KTWAYFINDER,
    VIOLIN,
    WATERKH,
    FAUXRETRO,
    BRANDONGLOVICH,
    MYSTERY_B,
    NOTORCRANK,
    ROYALAQUA,
    PREFERREDWHALE,
    THENINJAROID,
    UPHILLSUBSET,
    KHGUIDES,
    CRAZYCOMICS,
    MYSTERY_A,
    VETELINO,
];

export const ULTIMATE_CHICKEN_HORSE_PLAYERS = [
    NOBODYDAXIAN,
    BRANDONGLOVICH,
    NOTORCRANK,
    THENINJAROID,
];

export const TRICKY_TOWERS_PLAYERS = [
    KTWAYFINDER,
    FAUXRETRO,
    SAHARAH,
    UPHILLSUBSET,
];

export const CAKE_BASH_PLAYERS = [
    KHGUIDES,
    CRAZYCOMICS,
    PAOPUKOMI,
    MYSTERY_B,
];


export const GANG_BEASTS_PLAYERS = [
    VIOLIN,
    ROYALAQUA,
    LANZTHEMASTER,
    MYSTERY_A
];

export const GOLF_WITH_YOUR_FRIENDS_PLAYERS = [
    PREFERREDWHALE,
    WATERKH,
    VETELINO,
    GAMECROIX
];

export const GREEN_TEAM = ALL_PLAYERS.filter((p) => p.team === GREEN);
export const ORANGE_TEAM = ALL_PLAYERS.filter((p) => p.team === ORANGE);
export const PURPLE_TEAM = ALL_PLAYERS.filter((p) => p.team === PURPLE);
export const YELLOW_TEAM = ALL_PLAYERS.filter((p) => p.team === YELLOW);

export const TEAMS: Teams = {
    'No Team': {
        team: NO_TEAM,
        players: [],
    },
    Green: {
        team: GREEN,
        players: GREEN_TEAM,
    },
    Orange: {
        team: ORANGE,
        players: ORANGE_TEAM,
    },
    Purple: {
        team: PURPLE,
        players: PURPLE_TEAM,
    },
    Yellow: {
        team: YELLOW,
        players: YELLOW_TEAM,
    }
}
