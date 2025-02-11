import WagmiWalletButton from "@/registry/wagmi-wallet/components/wagmi-button";
import GlobalWagmiProvider from "@/registry/wagmi-wallet/components/wagmi-provider";

export default function WagmiWalletComponent() {
  return (
    <GlobalWagmiProvider>
      <WagmiWalletButton />
    </GlobalWagmiProvider>
  );
}
