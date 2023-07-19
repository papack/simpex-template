import { Component } from "solid-js";
import { Flex, FlexProps } from ".";

export type StackProps = FlexProps;

export const Stack: Component<StackProps> = (p) => {
  return (
    <Flex flxDirection="column" {...p}>
      {p.children}
    </Flex>
  );
};
