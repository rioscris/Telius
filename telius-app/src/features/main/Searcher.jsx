import { SearchIcon } from "@chakra-ui/icons";
import { Center, Grid, GridItem, Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const InputItem = ({ colSpan, placeholder, title }) => (
    <GridItem colSpan={colSpan}>
        <Grid h="100%" templateRows="repeat(2, 0fr)">
            <GridItem rowSpan={1}>
                <Text fontSize="sm" fontWeight="bold" fontFamily="Varela Round">
                    {title}
                </Text>
            </GridItem>
            <GridItem rowSpan={1}>
                <Input
                    placeholder={placeholder}
                    border="none"
                    fontFamily="Varela Round"
                    paddingLeft="0"
                    paddingRight="0"
                    variant="unstyled"
                />
            </GridItem>
        </Grid>
    </GridItem>
);

const DividerItem = () => (
    <GridItem colSpan={1}>
        <Center height="100%" width="100%">
            <Divider orientation="vertical" height="70%" color="gray.400" />
        </Center>
    </GridItem>
);

const SearchItem = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('catalogo')
    }
    return (
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
                    onClick={handleClick}
                    icon={<SearchIcon />}
                />
            </Center>
        </GridItem>
    );
}

export const Searcher = () => {
    return (
        <Container
            height="100%"
            backgroundColor="white"
            maxW="container.lg"
            borderRadius="50px"
            paddingLeft="30px"
            paddingRight="30px"
        >
            <Grid height="100%" templateColumns="repeat(15, 1fr)">
                <InputItem
                    colSpan={4}
                    title="Materia o idioma"
                    placeholder="Ej: Física, Inglés, etc."
                />
                <DividerItem />
                <InputItem
                    colSpan={4}
                    title="Ubicación"
                    placeholder="Ej: Palermo, Buenos Aires"
                />
                <DividerItem />
                <InputItem
                    colSpan={4}
                    title="Horarios"
                    placeholder="Ej: Lu, Ma, Mi - 14hs a 18hs - ..."
                />
                <SearchItem />
            </Grid>
        </Container>
    );
};

export default Searcher;
