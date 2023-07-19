import { Component } from "solid-js";
import { Box, BoxProps } from "./";

export interface BackgroundProps extends BoxProps {
  zIndex?: number;
}

export const Background: Component<BackgroundProps> = (p) => {
  return (
    <Box
      {...p}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        "z-index": p.zIndex,

        ...p.style,
      }}
    >
      {p.children}
    </Box>
  );
};
