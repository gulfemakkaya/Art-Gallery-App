import { useAtom } from "jotai";
import ArtPieces from "../../components/ArtPieces/ArtPieces";
import globalPieces from "../store";

export default function ArtPiecesPage() {
  const [pieces] = useAtom(globalPieces);

  return (
    <>
      <h1>art pieces page</h1>
      <ArtPieces pieces={pieces} />
    </>
  );
}
