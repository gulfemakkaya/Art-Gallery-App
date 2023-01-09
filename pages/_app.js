import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useAtom } from "jotai";
import useSWR from "swr";
import globalPieces from "./store";
import Layout from "../components/Layout/Layout";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  const [pieces, setPieces] = useAtom(globalPieces);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // make data global ---------------
  setPieces(data);
  console.log("pieces from app.js: ", pieces);
  console.log("data from app.js: ", data);
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
