import { Box, Center, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import { SearcherMini } from "features/main/SearcherMini";
import TeliusLogo from "images/teliuscolorlogo.png";

const Layout = (props) => {
    return (
        <Box>
            <Box boxShadow='0 5px 6px -6px #999' overflow='hidden' position='fixed' top='0' width='100%' padding='1em' backgroundColor='white'>
                <Flex>
                    <Center>
                        <Image marginLeft={'1em'} marginRight={'1em'} src={TeliusLogo} alt="telius" boxSize='3.5em' />
                        <Heading
                            style={{
                                color: '#5993DC',
                                fontFamily: "Varela Round",
                                marginTop: 0,
                                marginBottom: 0,
                            }}
                        >Telius</Heading>
                    </Center>
                    <Spacer />
                    <SearcherMini />
                    <Spacer />
                </Flex>
            </Box>
            <Box paddingTop='5.5em'>
                {props.children}
            </Box>
        </Box>
    )
}

export default Layout;