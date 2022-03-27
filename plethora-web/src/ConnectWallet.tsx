import React from "react";
import { createProfile } from "./repositories/create-profile";

interface ConnectWalletProps {
  setUser: (walletAddress: string) => void;
  nickname: string;
}

const connectWallet = async (props: ConnectWalletProps) => {
  const { ethereum } = window as any;

  if (!ethereum) {
    alert("Get MetaMask -> https://metamask.io/");
    return;
  }

  const accounts = await ethereum.request({ method: "eth_requestAccounts" });

  console.log("Connected", accounts[0]);

  await createProfile(props.nickname, accounts[0]);

  props.setUser(props.nickname);
}

export default function ConnectWallet(props: ConnectWalletProps) {
  return (
    <div className="connect-wallet">
      <button onClick={() => connectWallet(props)}>
        Connect Wallet
      </button>
    </div>
  )
}
