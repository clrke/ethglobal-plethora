import { ethers } from 'ethers';

export const ethersProvider = new ethers.providers.Web3Provider((window as any).ethereum);

export const getAddress = async() => {
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}

export const signText = (text: string) => {
  return ethersProvider.getSigner().signMessage(text);
};
