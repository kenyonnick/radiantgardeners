import { Player, Team } from "@src/types";

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
    color: 'orange',
};

export const YELLOW: Team = {
    name: 'Yellow',
    color: '#ff4',
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

const imgRoot = "imgs/party-fest/2024/players/";

export const PAOPUKOMI: Player = {
    name: 'PaopuKomi',
    team: PURPLE,
    twitch: 'PaopuKomi',
    youtube: '@PaopuKomi',
    twitter: '@PaopuKomi',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bf266082-d286-4659-bd70-7b7e0204e58b-profile_image-150x150.png',
};

export const FOXTROTPERRY: Player = {
    name: 'FoxtrotPerry',
    team: GREEN,
    twitch: 'foxtrotperry',
    twitter: '@foxtrotperry',
    img: imgRoot + 'FoxtrotPerry.jpg',
};

export const BRANDONGLOVICH: Player = {
    name: 'brandonglovich',
    team: PURPLE,
    twitch: 'brandonglovich',
    youtube: '@brandonglovich',
    twitter: '@Brandon_Glovich',
    instagram: 'brandonglovich',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e1b5ae4f-037c-42f7-b942-0caa513a2a25-profile_image-150x150.png',
};

export const KTWAYFINDER: Player = {
    name: 'KTWayfinder',
    team: GREEN,
    twitch: 'KTWayfinder',
    img: imgRoot + 'KT.png',
};

export const LILINDO: Player = {
    name: 'lilindo_s',
    team: PURPLE,
    twitch: 'lilindo_s',
    youtube: '@lilindo_vods7739',
    instagram: 'lilindo_s',
    img: imgRoot+'Lilindo_6.jpg',
};

export const FAUXRETRO: Player = {
    name: 'FauxRetro',
    team: YELLOW,
    twitch: 'FauxRetro',
    youtube: '@FauxRetro',
    twitter: '@FauxRetro',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/5a255dd1-a5ed-4337-99a4-7ce6d2237bd3-profile_image-150x150.png',
};

export const VIOLIN: Player = {
    name: 'Violin',
    team: PURPLE,
    twitch: 'Violin',
    youtube: '@ViolinSpeedruns',
    twitter: '@ViolinSpeedruns',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e4a5b80d-0bcf-4108-bb04-580d3bb922ac-profile_image-150x150.png',
};

export const ROYALAQUA: Player = {
    name: 'RoyalAqua',
    team: GREEN,
    twitch: 'royalaqua',
    youtube: '@royalaqua7',
    twitter: '@royalaqua7',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/190d5bb7-8031-42da-80dc-069a4e61f7ed-profile_image-150x150.png',
};

export const UPHILLSUBSET: Player = {
    name: 'UphillSubset72',
    team: GREEN,
    twitch: 'UphillSubset',
    img: imgRoot+'Uphill.jpg',
};

export const MOMOPKMN: Player = {
    name: 'MomoPkmn95',
    team: ORANGE,
    twitch: 'MomoPkmn95',
    youtube: '@MomoPkmn95',
    twitter: '@MomoPkmn95',
    instagram: 'MomoPkmn95',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/11082b34-3781-4647-a753-0699a4736db0-profile_image-150x150.png',
};

export const NOTORCRANK: Player = {
    name: 'NotoriousCRANK',
    team: PURPLE,
    twitch: 'NotoriousCRANK',
    twitter: '@NotorCRANK',
    img: imgRoot+'crank.png',
};

export const GAMECROIX: Player = {
    name: 'GameCroix',
    team: YELLOW,
    twitch: 'GameCroix',
    youtube: '@GameCroix',
    twitter: '@GameCroix',
    instagram: 'GameCroix',
    img: imgRoot+'GameCroixHm.png',
};

export const THENINJAROID: Player = {
    name: 'TheNinjaroid',
    team: GREEN,
    twitch: 'TheNinjaroids',
    youtube: '@TheNinjaroid',
    twitter: '@TheNinjaroid',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/fdca4572-6959-449a-a6ad-977bf8fe6082-profile_image-150x150.png',
};

export const SAHARAH: Player = {
    name: 'saharahinfinity',
    team: ORANGE,
    twitch: 'saharahinfinity',
    youtube: '@SaharahInfinity',
    twitter: '@SaharahInfinity',
    instagram: 'SaharahInfinity',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/18c4fb38-f30e-4471-bc02-484e67265902-profile_image-150x150.png'
};

export const JEICE: Player = {
    name: 'Jeice (PixelScrubs)',
    team: YELLOW,
    twitch: 'pixelscrubs',
    twitter: '@Jeice795',
    img: imgRoot+'Ron_Icon_2.jpg',
};

export const RITALI: Player = {
    name: 'Ritali (PixelScrubs)',
    team: ORANGE,
    twitch: 'pixelscrubs',
    twitter: '@NeonRitali',
    img: '2023/Ritali_Orange.png' // TODO
};

export const KHGUIDES: Player = {
    name: 'KHGuides',
    team: YELLOW,
    twitch: 'KHGuides',
    youtube: '@KHGuides',
    twitter: 'KHGuides',
    img: imgRoot+'Guides.png',
};

export const CRAZYCOMICS: Player = {
    name: 'Crazy_Comics',
    team: ORANGE,
    twitch: 'Crazy_Comics',
    youtube: '@Crazy_Comics',
    twitter: '@CrazyComics23',
    instagram: 'CrazyComics23',
    img: imgRoot+'CrazyComics.png'
};

export const BAMBINA: Player = {
    name: 'BambinaFofina',
    team: ORANGE,
    twitch: 'BambinaFofina',
    youtube: '@BambinaFofina',
    instagram: 'BambinaFofina',
    twitter: '@BambinaFofina',
    img: imgRoot+'Bambina.png',
};

export const VETELINO: Player = {
    name: 'Vetelino',
    team: YELLOW,
    twitch: 'VetelinoTV',
    youtube: '@Vetelino',
    twitter: '@VetelinoTV',
    img: imgRoot+'Vetelino.png',
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
    FOXTROTPERRY,
    JEICE,
    SAHARAH,
    KTWAYFINDER,
    VIOLIN,
    LILINDO,
    FAUXRETRO,
    BRANDONGLOVICH,
    MOMOPKMN,
    NOTORCRANK,
    ROYALAQUA,
    RITALI,
    THENINJAROID,
    UPHILLSUBSET,
    KHGUIDES,
    CRAZYCOMICS,
    BAMBINA,
    VETELINO,
];

export const ULTIMATE_CHICKEN_HORSE_PLAYERS = [
    MYSTERY_GREEN,
    MYSTERY_YELLOW,
    MYSTERY_PURPLE,
    MYSTERY_ORANGE,
];

export const GANG_BEASTS_PLAYERS = [
    MYSTERY_GREEN,
    MYSTERY_YELLOW,
    MYSTERY_PURPLE,
    MYSTERY_ORANGE,
];

export const CAKE_BASH_PLAYERS = [
    MYSTERY_GREEN,
    MYSTERY_YELLOW,
    MYSTERY_PURPLE,
    MYSTERY_ORANGE,
];

export const GOLF_WITH_YOUR_FRIENDS_PLAYERS = [
    MYSTERY_GREEN,
    MYSTERY_YELLOW,
    MYSTERY_PURPLE,
    MYSTERY_ORANGE,
];

export const TRICKY_TOWERS_PLAYERS = [
    MYSTERY_GREEN,
    MYSTERY_YELLOW,
    MYSTERY_PURPLE,
    MYSTERY_ORANGE,
];

export const GREEN_TEAM = ALL_PLAYERS.filter((p) => p.team === GREEN);
export const ORANGE_TEAM = ALL_PLAYERS.filter((p) => p.team === ORANGE);
export const PURPLE_TEAM = ALL_PLAYERS.filter((p) => p.team === PURPLE);
export const YELLOW_TEAM = ALL_PLAYERS.filter((p) => p.team === YELLOW);
