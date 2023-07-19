import { Component } from "solid-js";
import { Box, BoxProps } from ".";

export interface RelativeProps extends BoxProps {
  zIndex?: string;
}

export const Relative: Component<RelativeProps> = (p) => {
  return (
    <Box
      {...p}
      style={{
        position: "relative",
        "z-index": p.zIndex,
        ...p.style,
      }}
    >
      {p.children}
    </Box>
  );
};
