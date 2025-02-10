import { WalletButton } from "@/registry/solana/components/wallet-button";
import AppWalletProvider from "./components/app-wallet-provider";

export default function SolanaAuthPage() {
  return (
    <AppWalletProvider>
      <WalletButton />
    </AppWalletProvider>
  );
}
