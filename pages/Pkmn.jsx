import {
  Container,
  Text,
  Flex,
  Link as CLink,
  Button,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../src/AnimatedPage";

function Pkmn() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Container textAlign="justify">
      <AnimatedPage>
        <Flex>
          <Link to="/works">
            <Text color="pink.600" fontWeight="semibold">
              Works {">"} <span>&nbsp;</span>{" "}
            </Text>
          </Link>
          <Text marginTop={-0.5} fontSize={20} fontWeight="bold">
            {" "}
            Pokemon MinMax AI prototype
          </Text>
        </Flex>
        <Text>
          This is a working prototype of an AI that tries to resolve the huge
          problem in the 1st Pokemon gen:{" "}
          <strong>
            The moves were chosen only by their effectivenes of the other
            Pokemon's types.{" "}
          </strong>
          We analized an Event: TwicthPlaysPokemon, a Twitch livestream where
          the Twicth chat was playing Pokemon red. Versus Lance, his Dragonite
          was spamming a status move because the chat's pokemon was weak against
          the type of that move, which results in a free win. <br />
          <br />I created this google sheets spreadsheet with the intent of
          trying to solve this problem. You can customize The Pokemons and their
          moves, and the AI will try to guess the most effective move to use in
          that situation.
        </Text>
        <Center paddingTop={5}>
          <CLink
            href="https://docs.google.com/spreadsheets/d/1uhDtd83nUgkZS4FQddQBbQhaMlRLNcxUorxZ6B1iwo4/edit#gid=1690468854"
            _hover={{ fontStyle: "none" }}
          >
            <Button
              isExternal={true}
              _activeLink=""
              background={isDark ? "teal.300" : "teal.400"}
              color={isDark ? "black" : "white"}
              _hover={{ background: "teal" }}
            >
              View Spreadsheet{" "}
            </Button>
          </CLink>
        </Center>
        <Text>
          <br />
          I'm currently working on much better one, which includes all 898
          Pokemons and all 826 moves, natures, IVs, EVs, and more.
        </Text>
        <Center paddingTop={5}>
          <CLink
            isExternal={true}
            href="https://docs.google.com/spreadsheets/d/1fmkO-LCBv8VM3KNc5TkywWm2hi1VmJ3s19XWjGKlNbo/edit#gid=1040089026"
            _hover={{ fontStyle: "none" }}
          >
            <Button
              _activeLink=""
              background={isDark ? "teal.300" : "teal.400"}
              color={isDark ? "black" : "white"}
              _hover={{ background: "teal" }}
            >
              View Improved SpreadSheet (WIP)
            </Button>
          </CLink>
        </Center>
        <br />
        <br />
      </AnimatedPage>
    </Container>
  );
}

export default Pkmn;
