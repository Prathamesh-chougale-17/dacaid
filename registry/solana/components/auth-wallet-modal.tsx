"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogOverlay,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react"; // Add this import for the close icon
import { useMemo, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface WalletModalProps {
  open: boolean;
  onClose: () => void;
}

export function WalletModal({ open, onClose }: WalletModalProps) {
  const { wallets, select, connected } = useWallet();

  useEffect(() => {
    const mainContent = document.querySelector("main");
    if (!connected && mainContent && open) {
      mainContent.classList.add("blur-sm");
    } else if (mainContent) {
      mainContent.classList.remove("blur-sm");
    }

    // Close modal when connected
    if (connected) {
      onClose();
    }
  }, [connected, onClose]);

  const [installedWallets] = useMemo(() => {
    const installed = wallets.filter(
      (wallet) => wallet.readyState === WalletReadyState.Installed
    );
    const notInstalled = wallets.filter(
      (wallet) => wallet.readyState !== WalletReadyState.Installed
    );
    return [installed, notInstalled];
  }, [wallets]);

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="max-w-md">
        <div className="flex justify-between items-start">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {installedWallets.length > 0
                ? "Connect a wallet on Solana to continue"
                : "Install a Solana wallet to continue"}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="grid gap-4">
          {installedWallets.length > 0 ? (
            // Show installed wallets
            installedWallets.map((wallet) => (
              <button
                key={wallet.adapter.name}
                onClick={() => select(wallet.adapter.name)}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent"
              >
                {wallet.adapter.icon && (
                  <Image
                    src={wallet.adapter.icon}
                    alt={wallet.adapter.name}
                    className="w-8 h-8"
                    height={32}
                    width={32}
                  />
                )}
                <span>{wallet.adapter.name}</span>
              </button>
            ))
          ) : (
            // Show download options
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                You need to install a Solana wallet to continue. Here are some
                popular options:
              </p>
              <div className="grid gap-3">
                <a
                  href="https://phantom.app/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent border"
                >
                  <Image
                    src="/phantom.svg"
                    alt="Phantom"
                    className="w-8 h-8"
                    height={32}
                    width={32}
                  />
                  <div>
                    <p className="font-medium">Phantom Wallet</p>
                    <p className="text-sm text-muted-foreground">
                      Popular Solana wallet
                    </p>
                  </div>
                </a>
                <a
                  href="https://solflare.com/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent border"
                >
                  <Image
                    src="/solflare.svg"
                    alt="Solflare"
                    className="w-8 h-8"
                    height={32}
                    width={32}
                  />
                  <div>
                    <p className="font-medium">Solflare Wallet</p>
                    <p className="text-sm text-muted-foreground">
                      Secure Solana wallet
                    </p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/")}
          className="mb-4"
        >
          Return to Home
        </Button>
      </AlertDialogContent>
      <AlertDialogOverlay className="bg-background/80 backdrop-blur-sm" />
    </AlertDialog>
  );
}
