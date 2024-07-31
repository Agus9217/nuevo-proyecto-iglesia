import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

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
        px={8}
        h={'100%'}
        w={'50%'}
        justifyContent={'center'}
        direction={'column'}
      >
        <Text
          as={'i'}
        >
          Donde encontrarnos
        </Text>
        <Heading>
          Sobre Nosotros
        </Heading>
        <Text>
          Consectetur erat eget, lacus turpis amet, libero eleifend ultricies duis. Nam nullam at, ac iaculis aliquet, a in condimentum amet. Diam malesuada sed, et non dui, vitae nisl nullam varius. Tortor aliquam nibh, a enim praesent, est tristique consequat enim. Imperdiet dignissim suspendisse, pulvinar pharetra dui, dui facilisis ullamcorper eleifend.
        </Text>
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
