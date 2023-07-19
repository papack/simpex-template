import { Component } from "solid-js";
import { Box, BoxProps } from ".";

export interface CirclePropsInterface extends BoxProps {}

export const Circle: Component<CirclePropsInterface> = (p) => {
  return (
    <Box r="99999px" {...p} style={p.style}>
      {p.children}
    </Box>
  );
};
