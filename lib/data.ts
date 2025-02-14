import WagmiWalletComponent from "@/registry/wagmi-wallet/page";
import SolanaWalletAuthencation from "@/registry/solana/page";
import { ComponentDataType } from "@/types/components-data";
export const ComponentsData: ComponentDataType[] = [
  {
    name: "solana-wallet-authencation",
    title: "Solana Wallet Authencation",
    link: "/components/solana-wallet-authencation",
    component: SolanaWalletAuthencation,
    description: "Solana Wallet Authencation",
  },
  {
    name: "wagmi-wallet-button",
    title: "WAGMI Wallet Button",
    link: "/components/wagmi-wallet-button",
    component: WagmiWalletComponent,
    description: "WAGMI Wallet Button",
  },
];
