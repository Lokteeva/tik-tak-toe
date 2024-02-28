import avatar1 from './image/avatar1.png';
import avatar2 from './image/avatar2.png';
import avatar3 from './image/avatar3.png';
import avatar4 from './image/avatar4.png';

export const GAME_SYMBOLS = {
  CROSS: 'cross',
  ZERO: 'zero',
  TRIANGLE: 'triangle',
  SQUARE: 'square',
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const players = [
  {
    id: 1,
    name: 'July',
    rating: 1250,
    avatar: avatar1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: 'Lala',
    rating: 9650,
    avatar: avatar2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: 'Pop',
    rating: 3250,
    avatar: avatar3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: 'Rone',
    rating: 7850,
    avatar: avatar4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];