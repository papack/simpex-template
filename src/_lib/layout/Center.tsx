import { Component } from "solid-js";
import { Flex, FlexProps } from ".";

export type CenterProps = FlexProps;

export const Center: Component<CenterProps> = (p) => {
  return (
    <Flex
      {...p}
      h={p.h || "100%"}
      style={{
        "justify-content": "center",
        "align-items": "center",
        ...p.style,
      }}
    >
      {p.children}
    </Flex>
  );
};
