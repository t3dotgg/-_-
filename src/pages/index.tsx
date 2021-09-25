import React from "react";
import Head from "next/head";
import { fillRandomEmojis, getEmojiSet } from "../utils/emoji";

export const ʘ_ʘ: React.FC<{ emojis: string[] }> = (props) => {
  return <div className="text-8xl">{props.emojis.join("")}</div>;
};

export default function ಠ_ಠ() {
  const [emojis, setEmojis] = React.useState(getEmojiSet());
  const fill = React.useMemo(() => fillRandomEmojis(emojis), [emojis]);
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden relative">
      <div className="absolute top-0 h-screen w-screen overflow-x-scroll ಠ_ಠ inline-block whitespace-nowrap opacity-20 z-0 select-none">
        {fill.map((spot, index) => (
          <div
            className="absolute rotate-emoji"
            key={index}
            style={{
              fontSize: spot.size,
              top: `${spot.y}%`,
              left: `${spot.x}%`,
              zIndex: spot.z,
              animation: `emote-flipper infinite ${spot.time}s linear`,
            }}
          >
            {spot.emoji}
          </div>
        ))}
      </div>
      <Head>
        <title>{emojis}</title>

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎲</text></svg>"
        />
      </Head>
      <div className="flex flex-col justify-center z-50 bg-black bg-opacity-80 p-8 pb-2 rounded-xl">
        <ʘ_ʘ emojis={emojis} />
        <button
          className="bg-gray-500 bg-opacity-40 hover:bg-opacity-60 transition p-2 m-5 text-2xl rounded-xl"
          onClick={() => setEmojis(getEmojiSet())}
        >
          {"🎲"}
        </button>
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  return { props: {} };
};
