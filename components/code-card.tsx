"use client";
import { CodeBlock } from "./code-block";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const CodeCard = ({ codeString }: { codeString: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(codeString);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Card className="w-full">
      <div className="p-4 bg-black border rounded-lg">
        <div className="flex justify-end mb-2">
          <Button
            onClick={copyToClipboard}
            variant={"ghost"}
            size={"sm"}
            className="transition-all invert dark:invert-0"
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
        {isCopied && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            Copied to clipboard!
          </div>
        )}
        {/* hide the scroll bar */}
        <div className="max-h-[500px] overflow-y-auto scroll-auto">
          <CodeBlock code={codeString} language="tsx" />
        </div>
      </div>
    </Card>
  );
};

export default CodeCard;
