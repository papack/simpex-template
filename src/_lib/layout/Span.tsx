import { Component } from "solid-js";
import { JSX } from "solid-js";

export interface SpanProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  f?: any;
}

export const Span: Component<SpanProps> = (p) => {
  return (
    <span
      {...p}
      style={{
        ...p.f,
      }}
    />
  );
};
