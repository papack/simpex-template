import { Component } from "solid-js";
import { Box, BoxProps } from ".";

export interface GridItemProps extends BoxProps {
  grdArea?: string; // gridArea
  grdColumn?: string; // gridColumn
  grdRow?: string; // gridRow
}

export const GridItem: Component<GridItemProps> = (p) => {
  return (
    <Box
      {...p}
      style={{
        "grid-area": p.grdArea,
        "grid-column": p.grdColumn,
        "grid-row": p.grdRow,
        ...p.style,
      }}
    >
      {p.children}
    </Box>
  );
};
