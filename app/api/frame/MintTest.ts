
import { ethers } from 'ethers';

const mintNFT = async (metadataUrl) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const mintFactoryAddress = 'YOUR_MINT_FACTORY_ADDRESS';
  const mintFactoryABI = [/* ABI of the MintFactory contract */];

  const contract = new ethers.Contract(mintFactoryAddress, mintFactoryABI, signer);
  const tx = await contract.createBasicEdition_efficient_d3ea1b36(metadataUrl, /* other parameters */);
  await tx.wait();
};
