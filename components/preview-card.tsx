import React from "react";
import { OpenInV0Button } from "./open-in-v0-button";

const PreviewCard = ({
  children,
  name,
  title,
}: {
  children: React.ReactNode;
  name: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[300px] relative">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">{title}</h2>
        <OpenInV0Button name={name} className="w-fit" />
      </div>
      <div className="flex justify-center items-center flex-1">{children}</div>
    </div>
  );
};

export default PreviewCard;
