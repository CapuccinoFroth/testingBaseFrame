import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';


const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time1',
    },
    {
      action: 'link',
      label: 'Holograph',
      target: 'https://testnet.holograph.xyz/open-edition/joey-collins-requiem-by-joey-collins-uk',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/DE.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
  //postUrl: `https://testnet.holograph.xyz/open-edition/joey-collins-requiem-by-joey-collins-uk`,
  
});

export const metadata: Metadata = {
  title: 'ziz.xyz',
  description: 'LFG',
  openGraph: {
    title: 'Berlin Base Frame project',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/DE.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Berlin Base Frame project1</h1>
    </>
  );
}
