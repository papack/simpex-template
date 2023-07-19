import { Center, space, font } from "simpex";

export const Home = () => {
  return (
    <Center h="100vh" w="100vw">
      <Center s="200px" p={space.$md} b="1px dashed gray" f={font.$lg}>
        Hello World!
      </Center>
    </Center>
  );
};
