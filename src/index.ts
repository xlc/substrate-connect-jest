import {
  ScProvider,
  WellKnownChain,
} from "@polkadot/rpc-provider/substrate-connect";
import { ApiPromise } from "@polkadot/api";

const main = async () => {
  // Create the provider for a known chain
  const provider = new ScProvider(WellKnownChain.westend2);
  // Stablish the connection (and catch possible errors)
  await provider.connect();
  // Create the PolkadotJS api instance
  const api = await ApiPromise.create({ provider });
  await api.rpc.chain.subscribeNewHeads((lastHeader) => {
    console.log(lastHeader.hash);
  });
  await api.disconnect();
};

main()