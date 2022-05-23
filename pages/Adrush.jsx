import {
  Container,
  Text,
  Flex,
  Link as CLink,
  Button,
  Center,
  useColorMode,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../src/AnimatedPage";

function Adrush() {
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
            Adrenaline Rush
          </Text>
        </Flex>
        <Text>
          Adrenaline Rush is an Italian game jam in which we have to create a
          mobile hypercasual action game with <strong>Unity.</strong> <br />
          Me and a team of 5 other people are creating an{" "}
          <strong>endless runner</strong>, the protagonist is a ghost that has
          to ascend by shooting himself some ectoplasms, while fleeing from the
          demons that want him into hell. The core mechanic is shooting at the
          various obstacles to make the ectoplasm ricochet and hit him, so he
          can escape the demons. <br />
          <br />
          I'm working as a <strong>programmer</strong>, and so I must:
          <ul>
            <li>Learn the Unity engine and learn the C# language</li>
            <li>
              Manage the workflow with source control: <strong>Git</strong> and{" "}
              <CLink>GitHub</CLink>
            </li>
            <li>
              Get to work with other people's code, and make my code clear and
              readable for others.
            </li>
          </ul>
        </Text>

        <Flex paddingTop={4}>
          <Text
            fontSize={20}
            fontWeight="bold"
            decoration="underline"
            textDecorationColor="gray"
            textUnderlineOffset={3}
            textDecorationThickness={4}
          >
            Time limit:{" "}
          </Text>
          <Text fontSize={20} color="teal">
            {" "}
            <span>&nbsp;</span> 2 months
          </Text>
        </Flex>

        <Flex paddingTop={4}>
          <Text
            fontSize={20}
            fontWeight="bold"
            decoration="underline"
            textDecorationColor={"gray"}
            textUnderlineOffset={3}
            textDecorationThickness={4}
          >
            Software:{" "}
          </Text>
          <Text fontSize={20} color="teal">
            {" "}
            <span>&nbsp;</span>
            <CLink href="https://unity.com/" isExternal>
              Unity
            </CLink>
          </Text>
        </Flex>

        <Flex paddingTop={4}>
          <Text
            fontSize={20}
            fontWeight="bold"
            decoration="underline"
            textDecorationColor={"gray"}
            textUnderlineOffset={3}
            textDecorationThickness={4}
          >
            Team:{" "}
          </Text>
          <Text fontSize={20} color="teal">
            {" "}
            <span>&nbsp;</span> 6 members
          </Text>
        </Flex>

        <br />
        <br />
      </AnimatedPage>
    </Container>
  );
}

export default Adrush;
