import {Heading, Stack} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Stack
      borderColor={'blue'}
      borderWidth={'thin'}
      h={'300px'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Heading>
        Footer
      </Heading>
    </Stack>
  )
}