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
      label: 'Go Mint your Avocado!',
      target: 'https://opensea.io/collection/avocados-from-the-world',
    },
 /*    {
      
        action: 'tx',
        label: 'test',
        target: `${NEXT_PUBLIC_URL}/api/tx`,
        postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
      
     // target: 'https://testnets.opensea.io/assets/base-sepolia/0xf9f9755cb214ba584866f976fe83a0e467692bb5/1',
    },*/
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/DE.png`,
    aspectRatio: '1:1',
  }
  
});

export const metadata: Metadata = {
  title: 'Avocados from the World',
  description: 'LFG',
  openGraph: {
    title: 'Avocados from the World',
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
      <h1>Berlin Base Frame project - Avocados NFTs</h1>
    </>
  );
}
