import { useAtom } from "jotai";
import Spotlight from "../components/Spotlight/Spotlight";
import globalPieces from "./store";

export default function SpotlightPage() {
  const [pieces] = useAtom(globalPieces);

  // get a random piece ---------------
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomPiece = pieces.at(getRandomInt(pieces.length));
  console.log(randomPiece);

  return (
    <>
      <h1>startseite</h1>
      <Spotlight piece={randomPiece} />
    </>
  );
}
