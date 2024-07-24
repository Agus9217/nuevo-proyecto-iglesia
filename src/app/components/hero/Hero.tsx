import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import imgHero from '../../assets/iglesia-hero-image.jpeg'
import Image from "next/image";

export const Hero = () => {
  return (
    <Stack
      borderWidth={'thin'}
      borderColor={'green'}
    >
      <Box
        borderColor={'blue'}
        display={'flex'}
        borderWidth={'thin'}
        w={'100%'}
        height={{ base: '500px', md: '600px', lg: '645px', '2xl': '810px' }}
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}
      >
        <Box
          as={Image}
          src={imgHero}
          w={'100%'}
          height={'100%'}
          objectFit={'cover'}
          filter={'brightness(65%)'}
        />
        <Box
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          color={'white'}
          textShadow={'0 0 20px black'}
          textAlign={'center'}
          maxW={'80%'}
          w={'100%'}
        >
          <Heading
            fontSize={{ base: '2xl', sm: '5xl', md: '6xl', lg: '8xl' }}
          >
            Iglesia Cristiana en Barrio Nuevo
          </Heading>
          <Text
            maxW={{ base: '80%', md: '60%' }}
            mx={'auto'}
            fontSize={{ base: 'xs', md: 'sm', lg: 'lg' }}
            py={{ base: '0.5rem', md: '2rem' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis quam porro, iure tenetur ipsa magnam aut
          </Text>
          <Button
            colorScheme={'yellow'}
            size={{ base: 'sm', md: 'lg' }}
          >
            Ver más
          </Button>
        </Box>
      </Box>
    </Stack>
  )
}
