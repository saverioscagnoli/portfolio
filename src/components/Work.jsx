import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
  Link as CLink,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

function Work() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Container>
      <Box>
        <Heading
          size="md"
          textDecor="underline"
          alignContent="left"
          textUnderlineOffset={2}
          textDecorationColor="gray"
          textDecorationThickness={4}
        >
          Work
        </Heading>

        <Text textAlign="justify" paddingTop={5}>
          I'm a game designer based in Rome, with a passion for building new
          ideas and universes. Currently studying in{" "}
          <CLink
            href="https://www.aiv01.it/docenti/"
            fontWeight="bold"
            isExternal
            color={isDark ? "yellow" : "black"}
          >
            AIV
          </CLink>{" "}
          (Accademia italiana videogiochi), where I'm working on several
          different projects.
        </Text>

        <Center paddingTop={5}>
          <Link to="/works">
            <Button
              background={isDark ? "teal.300" : "teal.400"}
              color={isDark ? "black" : "white"}
              _hover={{ background: "teal" }}
            >
              My portfolio{" "}
            </Button>
          </Link>
        </Center>
      </Box>
    </Container>
  );
}

export default Work;
