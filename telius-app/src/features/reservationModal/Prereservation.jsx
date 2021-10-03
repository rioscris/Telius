import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { Ranking } from "features/catalogue/Catalogue";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  Select,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai/";
import React, { useEffect } from "react";
import Trophy from "images/trophy.svg";

const Recognizements = ({ recognizements }) => {
  return (
    <HStack align="center" justify="center">
      <Center>
        <Image src={Trophy} boxSize="15px" />
        <Text
          margin="0.5em"
          color="gray.600"
          fontFamily="Varela Round"
          fontWeight="bold"
          fontSize="sm"
          textOverflow="ellipsis"
        >
          {recognizements}
        </Text>
      </Center>
    </HStack>
  );
};

const Headers = ({ professor }) => {
  return (
    <Flex>
      <Text
        margin="0.5em"
        fontFamily="Varela Round"
        fontWeight="bold"
        color="gray.600"
        fontSize="xl"
      >
        {professor.name}
      </Text>
      <Spacer />
      <Ranking
        stars={professor.ranking.stars}
        opinions={professor.ranking.totalOpinions}
      />
      <Recognizements recognizements={12} />
    </Flex>
  );
};

const TSelect = ({ placeholder, children }) => {
  return (
    <Select placeholder={placeholder} style={{ borderColor: "grey.600" }}>
      <option>{children}</option>
    </Select>
  );
};

const Prereservation = ({ isOpen, onClose, professor }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent style={{ padding: "1em" }}>
        <Headers professor={professor} />
        <VStack spacing="0.5em">
          <TSelect placeholder={"Cantidad de horas"}>Pack de 4 horas</TSelect>
          <TSelect placeholder={"Cantidad de alumnos"}>2 alumnos</TSelect>
          <TSelect placeholder={"Modalidad"}>Domicilio del alumno</TSelect>
        </VStack>
        <Divider color="gray.400" />
        <Text>Seleccioná los horarios</Text>
        <HStack>
          
        </HStack>
      </ModalContent>
    </Modal>
  );
};

export default Prereservation;
