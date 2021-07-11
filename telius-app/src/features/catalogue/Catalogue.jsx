import { StarIcon } from "@chakra-ui/icons";
import { Box, Center, Divider, Flex, Grid, GridItem, HStack, Icon, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { professors } from "./professors";
import { AiOutlineHeart } from "react-icons/ai/";


const list = (array, separator = '-') => array.map((item, ix) => `${item}${ix === array.length - 1 ? '' : ` ${separator} `}`);

const translateYears = (years) =>
    !years || years === 0 ? 'Sin experiencia' :
        years > 0 && years < 1 ? 'Menos de 1 año' :
            years === 1 ? '1 año' :
                Number.isInteger(years) ? `${years} años` : `Más de ${Math.floor(years)} años`;

const Detail = (props) => (
    <Text margin='0.5em' color="gray.600" fontFamily="Varela Round" fontWeight='bold' fontSize='sm'>
        {props.label}: <span style={{ color: "gray.600", fontWeight: 'normal' }}>{props.children}</span>
    </Text>
);

const Ranking = ({ stars, opinions }) => (
    <HStack align='center' justify='center'>
        <Center>
            <StarIcon color={'red.500'} />
            <Text margin='0.5em' color="gray.600" fontFamily="Varela Round" fontWeight='bold' fontSize='sm'>
                {stars.toLocaleString()}<span style={{ fontWeight: 'normal', color: 'gray' }}> ({opinions})</span>
            </Text>
        </Center>
    </HStack>
)

const Price = ({ hour, discount }) => (
    <Box>
        <Text margin='0.5em' color="gray.600" fontFamily="Varela Round" fontWeight='bold' fontSize='md'>
            ${hour} <span style={{ fontWeight: 'normal', color: 'gray' }}>por hora</span>
        </Text>
        <Text color="gray.600" fontFamily="Varela Round" fontSize='sm' margin='0'>
            <del>${Math.floor(hour * 4)} </del>
            <span style={{ fontWeight: 'bold', fontSize: 'sm' }}>${Math.floor(hour * 4 * (1 - discount))} </span>por 4 clases
        </Text>
    </Box>
)

const Catalogue = (props) => {
    return (
        <Center height="100%" width="100%">
            <Box w='60%'>
                <VStack spacing={8}>
                    {professors.map((professor, ix) =>
                        <Box key={ix} marginTop='0!important' w='100%' backgroundColor='white' >
                            <Divider color="gray.400" />
                            <Grid templateColumns='repeat(6, 1fr)' gap={5}>
                                <GridItem colSpan={2}>
                                    <Box overflow='hidden' textAlign='center'>
                                        <Image src={professor.image} maxWidth='100%' height='200px' fit='contain' borderRadius='1em' />
                                    </Box>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <Flex>
                                        <Text margin='0.5em' fontFamily="Varela Round" color="gray.500" fontSize='sm'>{list(professor.spaces.map(s => s.translation))}</Text>
                                        <Spacer />
                                        <Icon as={AiOutlineHeart} boxSize='1.5em' />
                                    </Flex>
                                    <Text margin='0.5em' fontFamily="Varela Round" fontWeight='bold' color="gray.600" fontSize='xl'>{professor.name}</Text>
                                    <Divider color="gray.300" marginLeft='0.5em' left='0px' width='2em' />
                                    <Detail label='Enseña'>{list(professor.subjects.map(s => s.translation))}</Detail>
                                    <Detail label='Niveles'>{list(professor.levels.map(s => s.translation))}</Detail>
                                    <Detail label='Formacion'>{professor.studies}</Detail>
                                    <Detail label='Experiencia dando clases'>{translateYears(professor.yearsOfExperience)}</Detail>
                                    <Flex margin='0.5em'>
                                        <Ranking stars={professor.ranking.stars} opinions={professor.ranking.totalOpinions} />
                                        <Spacer />
                                        <Price hour={professor.hourPrice} discount={0.2} />
                                    </Flex>
                                </GridItem>
                            </Grid>
                        </Box>
                    )}
                    <h1>aa</h1>
                </VStack>
            </Box>
        </Center >
    )
}

export default Catalogue;