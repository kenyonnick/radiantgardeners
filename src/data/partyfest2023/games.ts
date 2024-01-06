export type Game = {
    name: string;
    imgUrl: string;
    players: number;
};

export const MARIO_PARTY_SUPERSTARS: Game = {
    name: "Mario Party Superstars",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/1a/Mario_Party_Superstars_cover_art.jpg",
    players: 4
};

export const GANG_BEASTS: Game = {
    name:"Gang Beasts",
    imgUrl:"https://images.squarespace-cdn.com/content/v1/5628f502e4b06b50e9430925/1610028603675-VUROJGH4BX2DLYPOO51K/Website+Header+01.png",
    players: 4
};

export const ULTIMATE_CHICKEN_HORSE: Game = {
    name: "Ultimate Chicken Horse",
    imgUrl: "https://images.squarespace-cdn.com/content/v1/5601be1fe4b0dfb50e050a73/1513803885211-6VU0AL7AN0J2868ZATG1/2017-08-29+UltimateChickenHorse_FullGame_MasterArt.png?format:750w",
    players: 4
};

export const GOLF_WITH_YOUR_FRIENDS: Game = {
    name:"Golf With Your Friends",
    imgUrl:"https://upload.wikimedia.org/wikipedia/en/0/06/Golf_With_Your_Friends_cover_art_full.jpg",
    players: 4
};

export const FALL_GUYS: Game = {
    name:"Fall Guys",
    imgUrl:"https://images.igdb.com/igdb/image/upload/t_screenshot_big/ar9iw.jpg",
    players: 16
};

export const GAMES_LIST = [ULTIMATE_CHICKEN_HORSE, GANG_BEASTS, MARIO_PARTY_SUPERSTARS, GOLF_WITH_YOUR_FRIENDS, FALL_GUYS];

export const GAMES = Object.assign({}, GAMES_LIST.map((game) => { return { [game.name]: game }; }));