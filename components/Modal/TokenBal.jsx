import React, { useEffect, useState } from "react";
import TokenAbi from "@/ABIs/BuidlToken.json";
import StakingAbi from "@/ABIs/Staking.json";
import { useAccount, useContract, useProvider } from "wagmi";
import { ethers } from "ethers";

const TokenBal = () => {
  const [tokenBal, setTokenBal] = useState("0");
  const [rewardBal, setRewardBal] = useState("0");

  useEffect(() => {
    if (address && stakingContract && tokenContract) {
      const getReward = async () => {};
      const getBalance = async () => {};
      getReward();
      getBalance();
    }
  }, [address, stakingContract, tokenContract]);

  return (
    <div className="flex flex-col text-center justify-center ">
      <h2 className="mt-5 text-2xl">Your Tokens</h2>
      <div className="flex mx-auto my-5">
        <section className="border p-5 rounded-lg m-2">
          <h2>Rewards</h2>
          {rewardBal + " BT"}
        </section>
        <section className="border p-5 rounded-lg m-2">
          <h2>Balance</h2>
          {tokenBal + " BT"}
        </section>
      </div>
    </div>
  );
};

export default TokenBal;
