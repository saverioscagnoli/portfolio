import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../src/AnimatedPage";

function Works() {
  return (
    <Container>
      <AnimatedPage>
        <Heading
          size="md"
          textDecor="underline"
          textDecorationThickness={4}
          textDecorationColor="grey"
          textUnderlineOffset={2}
        >
          Works
        </Heading>

        <Grid templateColumns="repeat(2, 1fr)" gap={5} marginTop={10}>
          <Link to="/project-downgrade">
            <GridItem width={200}>
              <Image src="/images/pdowngrade/logo.jpg" borderRadius={10} />
              <Text textAlign="center" fontSize={18} fontWeight="semibold">
                Project: Downgrade <br />
              </Text>
              <Text textAlign="center">
                Project: Downgrade is a small fantasy action game, made in less
                than a month by a team of 5 designers.
              </Text>
            </GridItem>
          </Link>
          <Link to="/lalartu">
            <GridItem width={200}>
              <Image
                height={200}
                src="/images/lalartu/logo.png"
                borderRadius={10}
              />
              <Text textAlign="center" fontSize={18} fontWeight="semibold">
                Lalartu <br />
              </Text>
              <Text textAlign="center">
                Lalartu is a narrative-driven, investigative graphic adventure,
                It is the project I'm currently working on.{" "}
              </Text>
            </GridItem>
          </Link>
          <Link to="/pkmn">
            <GridItem width={200}>
              <Image
                height={200}
                src="/images/pkmn/pokeball.png"
                borderRadius={10}
              />
              <Text textAlign="center" fontSize={18} fontWeight="semibold">
                Pokemon-MinMax <br />
              </Text>
              <Text textAlign="center">Pokemon-MinMax </Text>
            </GridItem>
          </Link>
          <Link to="/Adrush">
            <GridItem width={200}>
              <Image
                height={200}
                src="/images/gamejam/joypad.png"
                borderRadius={10}
              />
              <Text textAlign="center" fontSize={18} fontWeight="semibold">
                Adrenaline Rush <br />
              </Text>
              <Text textAlign="center">
                Italian Game Jam, in which we have to create a hypercasual
                action mobile game in a span of 2 months.{" "}
              </Text>
            </GridItem>
          </Link>
        </Grid>
      </AnimatedPage>
    </Container>
  );
}

export default Works;
