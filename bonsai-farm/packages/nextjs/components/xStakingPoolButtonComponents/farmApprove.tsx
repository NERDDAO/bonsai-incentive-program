// import { useState } from "react";
import externalContracts from "../../contracts/externalContracts";
import { ethers } from "ethers";
import { useContractWrite } from "wagmi";

function FarmApprove() {
  const spender = externalContracts[137].xStakingPool.address;
  const amount = ethers.MaxUint256.toString();

  const { writeAsync } = useContractWrite({
    address: externalContracts[137].bonsaiTokenABI.address,
    abi: externalContracts[137].bonsaiTokenABI.abi,
    functionName: "approve",
    args: [spender, BigInt(amount)],
  });

  const handleApprove = async () => {
    if (writeAsync) {
      await writeAsync();
    }
  };

  return (
    <button className="w-200 h-200" onClick={handleApprove}>
      <img src="aproveflower.gif" alt="aprove flower button" />
    </button>
  );
}

export default FarmApprove;
