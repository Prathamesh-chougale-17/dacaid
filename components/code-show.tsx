import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeCard from "./code-card";
import PreviewCard from "./preview-card";
import SolanaAuthPage from "@/registry/solana/page";

export function PreviewTabs() {
  const codeString = `import { WalletButton } from "@/components/wallet-button";
  
  export default function SolanaAuthPage() {
    return <WalletButton />
  }
  
`;

  return (
    <Tabs defaultValue="preview" className="mx-auto max-w-3xl w-full">
      <TabsList className="grid max-w-64 grid-cols-2">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="max-w-3xl w-full">
        <PreviewCard
          name="solana-wallet-authencation"
          title="Solana Wallet Authentication"
        >
          <SolanaAuthPage />
        </PreviewCard>
      </TabsContent>
      <TabsContent value="code" className="w-full">
        <CodeCard codeString={codeString} />
      </TabsContent>
    </Tabs>
  );
}
