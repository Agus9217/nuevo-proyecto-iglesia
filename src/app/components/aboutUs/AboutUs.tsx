import { Flex, Heading } from "@chakra-ui/react";

export const AboutUs = () => {
  return (
    <Flex
      borderWidth={'thin'}
      borderColor={'green'}
      align={'center'}
      justifyContent={'center'}
      height={'500px'}
      direction={'row'}
    >
      <Flex
        m={0}
        p={0}
        h={'100%'}
        borderWidth={'thin'}
        borderColor={'teal'}
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
        borderWidth={'thin'}
        borderColor={'blue'}
        justifyContent={'center'}
        align={'center'}
      >
        <Heading>
          About Us video Youtube
        </Heading>
      </Flex>
    </Flex>
  )
}
