import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';


const frameMetadata = getFrameMetadata({
  buttons: [
   /* {
      label: 'Story time2',
    },*/
    {
      action: 'link',
      label: 'Go Mint your access!',
      target: 'https://testnet.holograph.xyz/open-edition/joey-collins-requiem-by-joey-collins-uk',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/DE.png`,
    aspectRatio: '1:1',
  }
  
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
