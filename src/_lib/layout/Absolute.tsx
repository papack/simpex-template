import { Component } from "solid-js";
import { Box, BoxProps } from "./";

export interface AbsolutePropsInterface extends BoxProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export const Absolute: Component<AbsolutePropsInterface> = (p) => {
  return (
    <Box
      {...p}
      style={{
        position: "absolute",
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
