import { Component } from "solid-js";
import { Flex, FlexProps } from ".";

export type WrapProps = FlexProps;
export const Wrap: Component<WrapProps> = (p) => {
  return (
    <Flex {...p} flxWrap="wrap">
      {p.children}
    </Flex>
  );
};
