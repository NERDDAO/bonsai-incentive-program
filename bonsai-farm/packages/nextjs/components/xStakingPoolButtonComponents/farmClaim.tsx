import externalContracts from "../../contracts/externalContracts";
import { useContractWrite } from "wagmi";

function FarmClaim() {
  const { writeAsync } = useContractWrite({
    address: externalContracts[137].xStakingPool.address,
    abi: externalContracts[137].xStakingPool.abi,
    functionName: "withdraw",
  });

  const handleClaim = async () => {
    if (writeAsync) {
      await writeAsync();
    }
  };

  return <button onClick={handleClaim}>Claim</button>;
}

export default FarmClaim;
