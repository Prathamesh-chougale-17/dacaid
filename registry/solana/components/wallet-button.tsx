"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react"; // Add this import
import { WalletModal } from "@/registry/solana/components/auth-wallet-modal"; // Add this import

export function WalletButton() {
  const { connected, publicKey, disconnect } = useWallet();
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false); // Add state for modal

  const shortAddress =
    publicKey?.toBase58().slice(0, 4) + "..." + publicKey?.toBase58().slice(-4);

  const copyAddress = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey.toBase58());
      toast({
        description: "Address copied to clipboard",
        duration: 2000,
      });
    }
  };

  if (!connected) {
    return (
      <>
        <Button
          variant="default"
          onClick={() => setShowModal(true)} // Update to use local state
          size={"default"}
        >
          <span className="sm:hidden block">Connect</span>
          <span className="hidden sm:block">Connect Wallet</span>
        </Button>
        <WalletModal open={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{shortAddress}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={copyAddress}>
            Copy address
          </DropdownMenuItem>
          <DropdownMenuItem onClick={disconnect}>Disconnect</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <WalletModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
