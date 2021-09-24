import React from "react";
import Head from "next/head";
import { getEmojiSet } from "../utils/emoji";

export const ʘ_ʘ: React.FC<{ emojis: string }> = (props) => {
  return <div className="text-8xl">{props.emojis}</div>;
};

export default function ಠ_ಠ() {
  const [emojis] = React.useState(getEmojiSet());
  return (
    <div className="flex h-screen w-screen bg-gray-800 text-gray-200 items-center justify-center">
      <Head>
        <title>{emojis}</title>

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎲</text></svg>"
        />
      </Head>
      <ʘ_ʘ emojis={emojis} />
    </div>
  );
}

export const getStaticProps = () => {
  return { props: {} };
};
