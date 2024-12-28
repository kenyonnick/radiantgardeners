import { Game } from "@src/types";

export const MYSTERY_GAME: Game = {
    name: 'To Be Announced',
    imgUrl: '/imgs/party-fest/mystery_game.png',
    players: 4,
}

export const CAKE_BASH: Game = {
    name: "Cake Bash",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/51/CakeBash_KeyArt_Square.jpg",
    players: 4
};

export const TRICKY_TOWERS: Game = {
    name: "Tricky Towers",
    imgUrl: "/imgs/party-fest/TrickyTowers.png",
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
    players: 20
};

export const GAMES_LIST = [ULTIMATE_CHICKEN_HORSE, TRICKY_TOWERS, CAKE_BASH, GANG_BEASTS, GOLF_WITH_YOUR_FRIENDS, FALL_GUYS];

export const GAMES = Object.assign({}, GAMES_LIST.map((game) => { return { [game.name]: game }; }));