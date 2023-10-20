import React from 'react'
import { useState, useEffect } from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { useAccount, useBalance } from 'wagmi';

const WalletComponent = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);
  const { address, isConnecting, isDisconnected } = useAccount()
  const { data, isError, isLoading } = useBalance({
    address: address,
  })

  return (
    <div className="wallet">
      <div className="">
        <ConnectButton label="Connect" />
      </div>
      <h2>Wallet Information</h2>
      <p className='address'>Public Address: {isConnecting ? "" : address}</p>
      <p>Balance: {data?.formatted} {data?.symbol}</p>
    </div>
  )
}

export default WalletComponent