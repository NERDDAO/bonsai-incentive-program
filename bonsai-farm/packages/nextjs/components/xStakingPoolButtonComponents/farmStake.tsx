/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import externalContracts from "../../contracts/externalContracts";
import { useContractWrite } from "wagmi";

function FarmStake() {
  const [amount, setAmount] = useState("1");

  const { writeAsync } = useContractWrite({
    address: externalContracts[137].xStakingPool.address,
    abi: externalContracts[137].xStakingPool.abi,
    functionName: "stake",
    args: [BigInt(amount)],
  });

  const handleStake = async () => {
    if (writeAsync) {
      await writeAsync();
    }
  };

  return <button onClick={handleStake}>Stake</button>;
}

export default FarmStake;
