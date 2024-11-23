"use client";
import { copyToClipboard } from "@/lib/utils";
import { Check, Clipboard } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const ClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = async () => {
    const result = await copyToClipboard(text);
    if (result.success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    }
  };

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="absolute top-4 right-2 cursor-pointer"
      onClick={handleClick}
      aria-label="Copy to clipboard"
    >
      {isCopied ? <Check /> : <Clipboard />}
    </Button>
  );
};

export default ClipboardButton;
