import { Component } from "solid-js";
import { FlexItem, FlexItemProps } from ".";

export interface FlexProps extends FlexItemProps {
  jc?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  ai?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  ac?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
  g?: string;
  flxDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  flxWrap?: "nowrap" | "wrap" | "wrap-reverse";
  flxFlow?: `${"row" | "row-reverse" | "column" | "column-reverse"} ${
    | "nowrap"
    | "wrap"
    | "wrap-reverse"}`;
}

export const Flex: Component<FlexProps> = (p) => {
  return (
    <FlexItem
      {...p}
      style={{
        display: "flex",
        "justify-content": p.jc,
        "align-items": p.ai,
        "align-content": p.ac,
        gap: p.g,
        "flex-direction": p.flxDirection,
        "flex-wrap": p.flxWrap,
        "flex-flow": p.flxFlow,
        ...p.style,
      }}
    >
      {p.children}
    </FlexItem>
  );
};
