import { Component } from "solid-js";
import { Background, BackgroundProps } from ".";

export type BlurProps = BackgroundProps;

export const Blur: Component<BlurProps> = (p) => {
  return (
    <Background
      {...p}
      style={{
        "backdrop-filter": "blur(5px)",
        ...p.style,
      }}
    >
      {p.children}
    </Background>
  );
};
