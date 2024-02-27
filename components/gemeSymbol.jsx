import { RxCross1 } from "react-icons/rx";
import { FaRegSquare } from "react-icons/fa";
import { IoTriangleOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { GAME_SYMBOLS } from "./constants";

export function GemeSymbol({ symbol }) {
   const Icon = {
     [GAME_SYMBOLS.CROSS]: RxCross1,
     [GAME_SYMBOLS.ZERO]: FaRegCircle,
     [GAME_SYMBOLS.TRIANGLE]: IoTriangleOutline,
     [GAME_SYMBOLS.SQUARE]: FaRegSquare
    }[symbol] ?? RxCross1;

    return <Icon/>
}