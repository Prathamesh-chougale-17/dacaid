import { JSX } from "react";

export type ComponentDataType = {
  name: string;
  title: string;
  link: string;
  component: () => JSX.Element;
  description: string;
};
