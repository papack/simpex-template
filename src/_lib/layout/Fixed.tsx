import { Component } from "solid-js";
import { Box, BoxProps } from ".";

export interface FixedProps extends BoxProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: string;
}

export const Fixed: Component<FixedProps> = (p) => {
  return (
    <Box
      {...p}
      style={{
        position: "fixed",
        top: p.top,
        bottom: p.bottom,
        left: p.left,
        right: p.right,
        "z-index": p.zIndex,
        ...p.style,
      }}
    >
      {p.children}
    </Box>
  );
};
