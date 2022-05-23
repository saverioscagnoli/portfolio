import React from "react";
import { Box, Link, Container, Heading, Text } from "@chakra-ui/react";

function Ilove() {
  return (
    <Container>
      <Box paddingTop={5}>
        <Heading
          size="md"
          textDecor="underline"
          alignContent="left"
          textUnderlineOffset={2}
          textDecorationColor="gray"
          textDecorationThickness={4}
        >
          I ♥
        </Heading>

        <Text textAlign="justify" paddingTop={5}>
          Art, music,{" "}
          <Link
            href="https://500px.com/p/saverioscagnoli?view=photos"
            isExternal
            fontWeight="bold"
            color="pink.500"
            textUnderlineOffset={3}
          >
            photography
          </Link>
          , origami, travelling and mangas, with my favourite one being{" "}
          <strong>Berserk</strong>. I also love <strong>coding</strong>, in
          particular JavaScript, NodeJS, TypeScript and Lua, with these I coded
          some{" "}
          <Link
            href="https://github.com/saverioscagnoli/uncle-pear-bot"
            fontWeight="bold"
            color="pink.500"
            isExternal
            textUnderlineOffset={3}
          >
            Discord bots
          </Link>
          , small 2D fighting games and this website with the React framework.
        </Text>
      </Box>
    </Container>
  );
}

export default Ilove;
