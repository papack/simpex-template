import { Component } from "solid-js";
import { Absolute, Relative, RelativeProps } from ".";

export interface ScrollProps extends RelativeProps {}

export const Scroll: Component<ScrollProps> = (p) => {
  return (
    <Relative s="100%">
      <Absolute
        {...p}
        top="0"
        right="0"
        bottom="0"
        left="0"
        style={{ overflow: "auto", "touch-action": "auto" }}
        onPointerMove={
          p.onPointerMove ||
          ((e: any) => {
            e.preventDefault();
            e.stopPropagation();
          })
        }
      >
        {p.children}
      </Absolute>
    </Relative>
  );
};
