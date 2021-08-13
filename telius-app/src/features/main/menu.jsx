import { Box, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import TeliusLogo from "images/teliuslogo.png";
import { Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import Searcher from "./Searcher";
import { useHistory } from "react-router-dom";
import "./main.css";
import { CalendarIcon } from "@chakra-ui/icons";

export const Menu = () => {
  const history = useHistory()
  const goToScheduler = () => {
    history.push('schedule')
  }
  return (
    <Box className="main">
      <Grid h="100px" templateColumns="repeat(7, 1fr)" gap={4}>
        <GridItem colSpan={1}>
          <Center>
            <Image
              marginLeft={"1em"}
              marginRight={"1em"}
              src={TeliusLogo}
              alt="telius"
              boxSize="4em"
            />
            <Heading
              style={{
                color: "white",
                fontFamily: "Varela Round",
              }}
            >
              Telius
            </Heading>
          </Center>
        </GridItem>
        <GridItem colSpan={1}>
            <Center height="100%" width="100%">
                <IconButton
                    color="white"
                    backgroundColor="#5993DC"
                    aria-label="Search database"
                    boxSize="14"
                    borderRadius="28"
                    fontSize="28"
                    border="none"
                    onClick={goToScheduler}
                    icon={<CalendarIcon />}
                />
            </Center>
        </GridItem>
        <GridItem colSpan={7} rowSpan={5}>
          <Center height={"100%"} w="100%">
            <Heading
              size="2xl"
              style={{
                color: "white",
                fontFamily: "Varela Round",
              }}
              textAlign="center"
              lineHeight="1.4"
            >
              Encontrá el profesor más cercano a tu casa
              <br />y comenzá tu aprendizaje
            </Heading>
          </Center>
        </GridItem>
        <GridItem colSpan={7} rowSpan={6}>
          <Searcher />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Menu;
