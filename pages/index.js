import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
