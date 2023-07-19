import { Component } from "solid-js";
import { GridItem, GridItemProps } from ".";

export interface GridProps extends GridItemProps {
  g?: string;
  ai?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "start";
  as?:
    | "auto"
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right";
  grdTemplateColumns?: string;
  grdTemplateRows?: string;
  grdTemplateAreas?: string;
  grdTemplate?: string;
  grdAutoColumns?: string;
  grdAutoRows?: string;
  grdAutoFlow?: "row" | "column" | "row dense" | "column dense";
  grd?: string;
  grdRowStart?: string;
  grdColumnStart?: string;
  grdRowEnd?: string;
  grdColumnEnd?: string;
  grdRow?: string;
  grdColumn?: string;
  grdRowGap?: string;
  grdColumnGap?: string;
  grdGap?: string;
}
export const Grid: Component<GridProps> = (p) => {
  return (
    <GridItem
      {...p}
      style={{
        display: "grid",
        "align-items": p.ai,
        "align-self": p.as,
        grid: p.grd,
        "grid-area": p.grdArea,
        "grid-auto-columns": p.grdAutoColumns,
        "grid-auto-flow": p.grdAutoFlow,
        "grid-auto-rows": p.grdAutoRows,
        "grid-column": p.grdColumn,
        "grid-column-end": p.grdColumnEnd,
        "grid-column-gap": p.grdColumnGap,
        "grid-column-start": p.grdColumnStart,
        "grid-gap": p.grdGap || p.g,
        "grid-row": p.grdRow,
        "grid-row-end": p.grdRowEnd,
        "grid-row-gap": p.grdRowGap,
        "grid-row-start": p.grdRowStart,
        "grid-template": p.grdTemplate,
        "grid-template-areas": p.grdTemplateAreas,
        "grid-template-columns": p.grdTemplateColumns,
        "grid-template-rows": p.grdTemplateRows,
        ...p.style,
      }}
    >
      {p.children}
    </GridItem>
  );
};
