import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import SolanaAuthPage from "@/registry/solana/page";
import WagmiWalletComponent from "@/registry/wagmi-wallet/page";

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distribution code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Solana wallet adapter example
            </h2>
            <OpenInV0Button
              name="solana-wallet-authencation"
              className="w-fit"
            />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <SolanaAuthPage />
          </div>
        </div>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Wagmi wallet button
            </h2>
            <OpenInV0Button name="wagmi-wallet-button" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <WagmiWalletComponent />
          </div>
        </div>
      </main>
    </div>
  );
}
