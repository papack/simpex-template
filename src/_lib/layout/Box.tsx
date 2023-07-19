import { Component, Show } from "solid-js";
import { JSX } from "solid-js";

export interface BoxProps extends JSX.HTMLAttributes<HTMLDivElement> {
  c?: string;
  f?: any;
  m?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mx?: string;
  my?: string;
  p?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  px?: string;
  py?: string;
  bg?: string;
  b?: string;
  bt?: string;
  br?: string;
  bb?: string;
  bl?: string;
  bx?: string;
  by?: string;
  r?: string;
  rt?: string;
  rr?: string;
  rb?: string;
  rl?: string;
  rtr?: string;
  rtl?: string;
  rbr?: string;
  rbl?: string;
  s?: string;
  h?: string;
  w?: string;
  maxH?: string;
  maxW?: string;
  minH?: string;
  minW?: string;
  cursor?: Cursor;
  shadow?: string;
  show?: boolean;
  style?: JSX.CSSProperties;
}

type Cursor =
  | "auto"
  | "default"
  | "none"
  | "context-menu"
  | "help"
  | "pointer"
  | "progress"
  | "wait"
  | "cell"
  | "crosshair"
  | "text"
  | "vertical-text"
  | "alias"
  | "copy"
  | "move"
  | "no-drop"
  | "not-allowed"
  | "e-resize"
  | "n-resize"
  | "ne-resize"
  | "nw-resize"
  | "s-resize"
  | "se-resize"
  | "sw-resize"
  | "w-resize"
  | "ew-resize"
  | "ns-resize"
  | "nesw-resize"
  | "nwse-resize"
  | "col-resize"
  | "row-resize"
  | "all-scroll"
  | "zoom-in"
  | "zoom-out"
  | "grab"
  | "grabbing";

export const Box: Component<BoxProps> = (p) => {
  return (
    <Show when={p.show || p.show === undefined} fallback={null}>
      <div
        {...p}
        style={{
          ...p.f, //spead all font props
          ...(() => {
            if (p.c) {
              return { color: p.c };
            }
            return {};
          })(),
          "margin-bottom": p.mb || p.my || p.m,
          "margin-left": p.ml || p.mx || p.m,
          "margin-right": p.mr || p.mx || p.m,
          "margin-top": p.mt || p.my || p.m,
          "padding-bottom": p.pb || p.py || p.p,
          "padding-left": p.pl || p.px || p.p,
          "padding-right": p.pr || p.px || p.p,
          "padding-top": p.pt || p.py || p.p,
          background: p.bg,
          "border-top": p.bt || p.by || p.b,
          "border-right": p.br || p.bx || p.b,
          "border-bottom": p.bb || p.by || p.b,
          "border-left": p.bl || p.bx || p.b,
          "border-top-right-radius": p.rtr || p.rt || p.rr || p.r,
          "border-top-left-radius": p.rtl || p.rt || p.rl || p.r,
          "border-bottom-right-radius": p.rbr || p.rb || p.rr || p.r,
          "border-bottom-left-radius": p.rbl || p.rb || p.rl || p.r,
          height: p.s || p.h,
          "max-height": p.maxH,
          "max-width": p.maxW,
          "min-height": p.minH,
          "min-width": p.minW,
          width: p.s || p.w,
          "box-shadow": p.shadow,
          cursor: p.cursor || "auto",

          //rest of the styles
          ...p.style,
        }}
      />
    </Show>
  );
};
