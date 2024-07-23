import {Box, Heading, Stack} from "@chakra-ui/react";

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
        height={{base: '500px', md: '600px', lg: '645px', '2xl': '810px'}}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading>
          Imagen Hero
        </Heading>
      </Box>
    </Stack>
  )
}