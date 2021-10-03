import { SearchIcon } from "@chakra-ui/icons";
import { Center, Container, Divider, Grid, GridItem, IconButton, Input } from "@chakra-ui/react";

const InputItem = ({ colSpan, placeholder, value }) => (
    <GridItem colSpan={colSpan} display='inherit'>
        <Input
            textOverflow='ellipsis'
            placeholder={placeholder}
            border="none"
            fontFamily="Varela Round"
            paddingLeft="0"
            paddingRight="0"
            variant="unstyled"
            defaultValue={value}
            fontWeight='bold'
        />
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
    const handleClick = () => {
    }
    return (
        <GridItem colSpan={1}>
            <Center height="100%" width="100%">
                <IconButton
                    color="white"
                    backgroundColor="#5993DC"
                    aria-label="Search database"
                    borderRadius="2em"
                    border="none"
                    onClick={handleClick}
                    icon={<SearchIcon />}
                />
            </Center>
        </GridItem>
    );
}

export const SearcherMini = () => {
    return (
        <Container
            backgroundColor="white"
            maxW="container.md"
            borderRadius="50px"
            borderWidth='1px'
            borderStyle='solid'
            borderColor='gray.300'
        >
            <Grid height="100%" templateColumns="repeat(15, 1fr)">
                <InputItem
                    colSpan={4}
                    title="Materia o idioma"
                    value="Ej: Física, Inglés, etc."
                />
                <DividerItem />
                <InputItem
                    colSpan={4}
                    title="Ubicación"
                    value="Ej: Palermo, Buenos Aires"
                />
                <DividerItem />
                <InputItem
                    colSpan={4}
                    title="Horarios"
                    value="Ej: Lu, Ma, Mi - 14hs a 18hs - ..."
                />
                <SearchItem />
            </Grid>
        </Container>
    );
};

export default SearcherMini;