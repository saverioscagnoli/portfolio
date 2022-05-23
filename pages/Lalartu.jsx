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

function Lalartu() {
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
            Lalartu
          </Text>
        </Flex>
        <Text>
          Lalartu is my second project and it's on a much bigger scale than my
          Project: Downgrade. Lalartu is a 3rd person narrative-driven and
          investigative game, where the protagonist is a powerful shaman, and
          has the power to listen and to control spirits! <br />
          In this project I'm working as the{" "}
          <strong>technical game designer </strong>
          and my resposibilites are: <br />
          <ul>
            <li>
              Managing the flow of work with source control:{" "}
              <strong>Git</strong> and{" "}
              <CLink
                fontWeight={"bold"}
                color="pink.500"
                isExternal={true}
                href="https://github.com/saverioscagnoli/Lalartu-new"
              >
                GitHub.
              </CLink>
            </li>
            <li>
              Code the <strong>reputation system</strong> present in game.
            </li>
            <li>
              Implementing the dilogue system and code events based on the
              dialogue output.
            </li>
            <li>
              Manage the in-game events through <strong>Blueprints</strong> and
              external packs.
            </li>
            <li>
              Making the game flow as smooth as possible. Catching and fixing
              bugs/glitches.
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
            <span>&nbsp;</span> 6 to 7 months
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
            <CLink href="https://www.unrealengine.com/en-US/" isExternal>
              Unreal Engine 4
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
            <span>&nbsp;</span> 5 Designers <br /> <span>&nbsp;</span> 3
            Musicians <br /> <span>&nbsp;</span> 4 3D artists <br />
            <span>&nbsp;</span> 1 Programmer
          </Text>
        </Flex>

        <Center paddingTop={5}>
          <CLink
            style={{ color: "inherit", textDecoration: "inherit" }}
            isExternal
            href="https://drive.google.com/file/d/1hhtsXZHmMygE48NjYp0jKme9A3dz0FtS/view?usp=sharing"
          >
            <Button
              background={isDark ? "teal.300" : "teal.400"}
              color={isDark ? "black" : "white"}
              _hover={{ background: "teal" }}
            >
              Demo {">"}
            </Button>
          </CLink>
        </Center>

        <Grid paddingTop={6}>
          <GridItem>
            <Image src="/images/lalartu/lalartu.png" borderRadius={10} />
          </GridItem>
          <GridItem paddingTop={4}>
            <Image src="/images/lalartu/lalartu2.png" borderRadius={10} />
          </GridItem>
          <GridItem paddingTop={4}>
            <Image src="/images/lalartu/lalartu3.png" borderRadius={10} />
          </GridItem>
        </Grid>
      </AnimatedPage>
    </Container>
  );
}

export default Lalartu;
