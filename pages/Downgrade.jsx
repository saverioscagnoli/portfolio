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
import AnimatedPage from "../src/AnimatedPage";
import { Link } from "react-router-dom";

function Downgrade() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Container>
      <AnimatedPage>
        <Flex>
          <Link to="/works">
            <Text color="pink.600" fontWeight="semibold">
              Works {">"} <span>&nbsp;</span>{" "}
            </Text>
          </Link>
          <Text marginTop={-0.5} fontSize={20} fontWeight="bold">
            {" "}
            Project: Downgrade
          </Text>
        </Flex>
        <Text>
          Project: Downgrade was my first academic project ever. We worked in
          teams to get a <strong>open world level,</strong> with only 1 core
          mechanic and without jumping; featuring 4 different biomes and 4
          bossfignt, with a working prototype of an AI. <br />
          In this project I worked as the <strong>level designer</strong>,
          implementing the desertic area, half of the central area, and the lava
          area. We faced a lot of difficulties, like make the AI work, learning
          new UE4 Blueprints and working in a team for the first time.
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
            <span>&nbsp;</span> 1 month
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
            <span>&nbsp;</span> 5 members
          </Text>
        </Flex>

        <Center paddingTop={5}>
          <CLink
            style={{ color: "inherit", textDecoration: "inherit" }}
            isExternal
            href="https://drive.google.com/file/d/1bGWHXX6DIi3XtsLxbSmIVvf78NpnH3GQ/view"
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
            <Image src="/images/pdowngrade/downgrade.png" borderRadius={10} />
          </GridItem>
          <GridItem paddingTop={4}>
            <Image src="/images/pdowngrade/downgrade1.png" borderRadius={10} />
          </GridItem>
          <GridItem paddingTop={4}>
            <Image src="/images/pdowngrade/downgrade2.png" borderRadius={10} />
          </GridItem>
          <GridItem paddingTop={4}>
            <Image src="/images/pdowngrade/downgrade3.png" borderRadius={10} />
          </GridItem>
          <GridItem paddingTop={4}>
            <Image src="/images/pdowngrade/downgrade4.png" borderRadius={10} />
          </GridItem>
          <GridItem paddingTop={4}>
            <Image src="/images/pdowngrade/downgrade5.png" borderRadius={10} />
          </GridItem>
          <GridItem paddingTop={4}>
            <Image src="/images/pdowngrade/downgrade6.png" borderRadius={10} />
          </GridItem>
          <GridItem paddingTop={4}>
            <Image src="/images/pdowngrade/downgrade7.png" borderRadius={10} />
          </GridItem>
          <GridItem paddingTop={4}>
            <Image src="/images/pdowngrade/downgrade8.png" borderRadius={10} />
          </GridItem>
        </Grid>
      </AnimatedPage>
    </Container>
  );
}

export default Downgrade;
