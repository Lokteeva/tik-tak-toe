import { Icon1, Icon2, Icon3, Icon4 } from "./icon/Icon"

import { GAME_SYMBOLS } from "./constants";

export function GemeSymbol({ symbol }) {
   const Icon = {
     [GAME_SYMBOLS.CROSS]: Icon3,
     [GAME_SYMBOLS.ZERO]: Icon2,
     [GAME_SYMBOLS.TRIANGLE]: Icon1,
     [GAME_SYMBOLS.SQUARE]: Icon4
    }[symbol] ?? Icon3;

    return <Icon/>
}