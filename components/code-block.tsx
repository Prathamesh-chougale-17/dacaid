"use client";

import { useEffect, useState } from "react";
import { createHighlighter } from "shiki";

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    const highlightCode = async () => {
      const highlighter = await createHighlighter({
        themes: ["github-dark", "everforest-dark", "ayu-dark"], // You can change the theme (e.g., "github-light", "nord", etc.)
        langs: [language],
      });

      const html = highlighter.codeToHtml(code, {
        lang: language,
        theme: "ayu-dark", // You can change the theme (e.g., "github-light", "nord", etc.)
      });

      setHighlightedCode(html);
    };

    highlightCode();
  }, [code, language]);

  return (
    <div
      className="p-4 bg-black rounded-lg overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}
