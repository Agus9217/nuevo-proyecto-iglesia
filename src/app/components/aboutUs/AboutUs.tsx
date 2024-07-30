import {Flex, Heading, Stack} from "@chakra-ui/react";

export const AboutUs = () => {
  return (
    <Stack
      align={'center'}
      justifyContent={'center'}
      height={'500px'}
      direction={'row'}
      spacing={0}
    >
      <Flex
        m={0}
        p={0}
        h={'100%'}
        w={'50%'}
        align={'center'}
        justifyContent={'center'}
      >
        <Heading>
          About Us
        </Heading>
      </Flex>
      <Flex
        m={0}
        p={0}
        h={'100%'}
        w={'50%'}
        justifyContent={'center'}
        align={'center'}
      >
        <Heading>
          About Us video Youtube
        </Heading>
      </Flex>
    </Stack>
  )
}
