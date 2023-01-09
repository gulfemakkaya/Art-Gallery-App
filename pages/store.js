import { atom } from "jotai";
import useSWR from "swr";

const pieces = [];

const globalPieces = atom(pieces);

export default globalPieces;
