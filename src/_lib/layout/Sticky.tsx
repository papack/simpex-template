import { Component } from "solid-js";
import { Box, BoxProps } from ".";

export interface StickyProps extends BoxProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export const Sticky: Component<StickyProps> = (p) => {
  return (
    <Box
      {...p}
      style={{
        position: "sticky",
        top: p.top,
        bottom: p.bottom,
        left: p.left,
        right: p.right,
        ...p.style,
      }}
    >
      {p.children}
    </Box>
  );
};
