import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

export default function Component() {
  const { contract } = useContract("0xB82A5Fcd5740a76975eD30c9b2e1945D8cC956A4");
  const { mutateAsync: claim, isLoading } = useContractWrite(contract, "claim")
  const address = useAddress();

  const call = async () => {
    try {
      const data = await claim({ args: [address, 0, 1, _currency, 0, _allowlistProof, _data] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  return(
    <div>
        <button onClick={()=> call()}>MINT</button>
    </div>
  )
}