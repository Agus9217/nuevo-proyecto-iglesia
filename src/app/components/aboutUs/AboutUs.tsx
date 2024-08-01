import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export const AboutUs = () => {
  return (
    <Stack
      align={'center'}
      justifyContent={'center'}
      direction={{ base: 'column', xl: 'row' }}
      spacing={0}
      pt={{ base: 20, xl: 10 }}
    >
      <Flex
        m={0}
        px={8}
        h={'100%'}
        w={'50%'}
        justifyContent={'center'}
        direction={'column'}
      >
        <Box>
          <Text
            as={'i'}
            color={'blue.600'}
            px={2}
            fontWeight={'semibold'}
          >
            Donde encontrarnos
          </Text>
        </Box>
        <Heading
          py={4}
        >
          Sobre Nosotros
        </Heading>
        <Text
          lineHeight={7}
        >
          Consectetur erat eget, lacus turpis amet, libero eleifend ultricies duis. Nam nullam at, ac iaculis aliquet, a in condimentum amet. Diam malesuada sed, et non dui, vitae nisl nullam varius. Tortor aliquam nibh, a enim praesent, est tristique consequat enim. Imperdiet dignissim suspendisse, pulvinar pharetra dui, dui facilisis ullamcorper eleifend.
        </Text>
        <Box
          pt={4}
        >
          <Button
            colorScheme={'blue'}
          >
            Ver Más
          </Button>
        </Box>

      </Flex>
      <Flex
        m={0}
        py={8}
        h={'100%'}
        w={'50%'}
        justifyContent={'center'}
        align={'center'}
      >

        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/ZYKjLEv0Bwg?si=KDaEMh4j61gFhkqE&amp;controls=0&amp;start=6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>

      </Flex>
    </Stack>
  )
}
