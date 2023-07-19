import { Box, BoxProps } from ".";
import { Component } from "solid-js";

export interface FlexItemProps extends BoxProps {
  flx?: string;
  as?: string;
  o?: string;
  flxGrow?: string;
  flxShrink?: string;
  flxBasis?: string;
}

export const FlexItem: Component<FlexItemProps> = (p) => {
  return (
    <Box
      {...p}
      style={{
        flex: p.flx,
        order: p.o,
        "align-self": p.as,
        "flex-grow": p.flxGrow,
        "flex-shrink": p.flxShrink,
        "flex-basis": p.flxBasis,
        ...p.style,
      }}
    >
      {p.children}
    </Box>
  );
};
