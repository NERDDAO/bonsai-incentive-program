// import { useState } from "react";
import externalContracts from "../../contracts/externalContracts";
import { ethers } from "ethers";
import { useContractWrite } from "wagmi";

function Erc20FarmApprove() {
  const spender = externalContracts[137].erc20StakingPool.address;
  const amount = ethers.MaxUint256.toString();

  const { writeAsync } = useContractWrite({
    address: externalContracts[137].bonsaiTokenABI.address, //change this for the lp token addy later
    abi: externalContracts[137].bonsaiTokenABI.abi, //same as above
    functionName: "approve",
    args: [spender, BigInt(amount)],
  });

  const handleApprove = async () => {
    if (writeAsync) {
      await writeAsync();
    }
  };

  return <button onClick={handleApprove}>Approve</button>;
}

export default Erc20FarmApprove;
