import React from 'react'
import Web3 from 'web3';
import { useState, useEffect } from 'react';

const WalletComponent = () => {
    const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function loadBlockchainData() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const balance = await web3.eth.getBalance(accounts[0]);
        setBalance(web3.utils.fromWei(balance, 'ether'));
      }
    }
    loadBlockchainData();
  }, []);
  return (
    <div className="wallet">
      <h2>Wallet Information</h2>
      <p>Public Address: {0x52e4cF152D4b47CA63A4DE48aa83AcCC2cb17D4c}</p>
      <p>Balance: {balance} ETH</p>
    </div>
  )
}

export default WalletComponent